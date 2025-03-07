import { processConfig } from '../src';
import loadConfig from '../src/load-config';
import fixtureConfigSimple from './fixtures/config-simple.json';
import fixtureConfigFull from './fixtures/config-full.json';
import fixtureConfigEnvVariables from './fixtures/config-env-variables.json';

jest.mock('../src/load-config');

const createTestOptions = (options) => ({
  disableCache: true,
  processEnv: {
    NODE_ENV: 'test',
  },
  ...options,
});

beforeEach(() => {
  loadConfig.mockClear();
});

describe('processing a simple config', () => {
  beforeEach(() => {
    loadConfig.mockReturnValue(fixtureConfigSimple);
  });
  it('should process the config and prepare the application environment and headers', () => {
    const result = processConfig(createTestOptions());
    expect(result).toEqual({
      env: {
        applicationId: undefined,
        applicationName: 'avengers-app',
        entryPointUriPath: 'avengers',
        cdnUrl: 'http://localhost:3001/',
        env: 'test',
        frontendHost: 'localhost:3001',
        location: 'gcp-eu',
        mcApiUrl: 'https://mc-api.europe-west1.gcp.commercetools.com',
        revision: '',
        servedByProxy: false,
      },
      headers: {
        csp: {
          'connect-src': ['https://mc-api.europe-west1.gcp.commercetools.com'],
          'script-src': [],
          'style-src': [],
        },
      },
    });
  });
  describe('with NODE_ENV=production', () => {
    it('should process the config as if for production', () => {
      const result = processConfig(
        createTestOptions({
          processEnv: {
            NODE_ENV: 'production',
          },
        })
      );
      expect(result).toEqual({
        env: {
          applicationId: undefined,
          applicationName: 'avengers-app',
          entryPointUriPath: 'avengers',
          cdnUrl: 'https://avengers.app/',
          env: 'production',
          frontendHost: 'avengers.app',
          location: 'gcp-eu',
          mcApiUrl: 'https://mc-api.europe-west1.gcp.commercetools.com',
          revision: '',
          servedByProxy: true,
        },
        headers: {
          csp: {
            'connect-src': [
              'https://mc-api.europe-west1.gcp.commercetools.com',
              'https://avengers.app/',
            ],
            'script-src': ['https://avengers.app/'],
            'style-src': ['https://avengers.app/'],
          },
        },
      });
    });
  });
  describe('with MC_APP_ENV=development and NODE_ENV=production', () => {
    it('should process the config where the MC_APP_ENV variable takes precedence over NODE_ENV', () => {
      const result = processConfig(
        createTestOptions({
          processEnv: {
            NODE_ENV: 'production',
            MC_APP_ENV: 'development',
          },
        })
      );
      expect(result).toEqual({
        env: {
          applicationId: undefined,
          applicationName: 'avengers-app',
          entryPointUriPath: 'avengers',
          cdnUrl: 'http://localhost:3001/',
          env: 'development',
          frontendHost: 'localhost:3001',
          location: 'gcp-eu',
          mcApiUrl: 'https://mc-api.europe-west1.gcp.commercetools.com',
          revision: '',
          servedByProxy: false,
        },
        headers: {
          csp: {
            'connect-src': [
              'https://mc-api.europe-west1.gcp.commercetools.com',
            ],
            'script-src': [],
            'style-src': [],
          },
        },
      });
    });
  });
  describe('with MC_APP_ENV=staging and NODE_ENV=production', () => {
    it('should process the config in production mode', () => {
      const result = processConfig(
        createTestOptions({
          processEnv: {
            NODE_ENV: 'production',
            MC_APP_ENV: 'staging',
          },
        })
      );
      expect(result).toEqual({
        env: {
          applicationId: undefined,
          applicationName: 'avengers-app',
          entryPointUriPath: 'avengers',
          cdnUrl: 'https://avengers.app/',
          env: 'staging',
          frontendHost: 'avengers.app',
          location: 'gcp-eu',
          mcApiUrl: 'https://mc-api.europe-west1.gcp.commercetools.com',
          revision: '',
          servedByProxy: true,
        },
        headers: {
          csp: {
            'connect-src': [
              'https://mc-api.europe-west1.gcp.commercetools.com',
              'https://avengers.app/',
            ],
            'script-src': ['https://avengers.app/'],
            'style-src': ['https://avengers.app/'],
          },
        },
      });
    });
  });
});

describe('processing a full config', () => {
  beforeEach(() => {
    loadConfig.mockReturnValue(fixtureConfigFull);
  });
  it('should process the config and prepare the application environment and headers', () => {
    const result = processConfig(createTestOptions());
    expect(result).toEqual({
      env: {
        applicationId: undefined,
        applicationName: 'avengers-app',
        entryPointUriPath: 'avengers',
        cdnUrl: 'http://localhost:3001/',
        env: 'test',
        frontendHost: 'localhost:3001',
        location: 'gcp-eu',
        mcApiUrl: 'https://mc-api.europe-west1.gcp.commercetools.com',
        numberOfMovies: 4,
        revision: '',
        servedByProxy: false,
      },
      headers: {
        csp: {
          'connect-src': [
            'https://track.avengers.app',
            'https://mc-api.europe-west1.gcp.commercetools.com',
          ],
          'script-src': ['https://track.avengers.app'],
          'style-src': [],
        },
        featurePolicies: {
          microphone: 'none',
        },
        permissionsPolicies: {
          microphone: '()',
        },
      },
    });
  });
  describe('with NODE_ENV=production', () => {
    it('should process the config as if for production', () => {
      const result = processConfig(
        createTestOptions({
          processEnv: {
            NODE_ENV: 'production',
          },
        })
      );
      expect(result).toEqual({
        env: {
          applicationId: undefined,
          applicationName: 'avengers-app',
          entryPointUriPath: 'avengers',
          cdnUrl: 'https://cdn.avengers.app/',
          env: 'production',
          frontendHost: 'avengers.app',
          location: 'gcp-eu',
          mcApiUrl: 'https://mc-api.europe-west1.gcp.commercetools.com',
          numberOfMovies: 4,
          revision: '',
          servedByProxy: true,
        },
        headers: {
          csp: {
            'connect-src': [
              'https://track.avengers.app',
              'https://mc-api.europe-west1.gcp.commercetools.com',
              'https://avengers.app/',
            ],
            'script-src': [
              'https://track.avengers.app',
              'https://avengers.app/',
              'https://cdn.avengers.app/',
            ],
            'style-src': ['https://avengers.app/', 'https://cdn.avengers.app/'],
          },
          featurePolicies: {
            microphone: 'none',
          },
          permissionsPolicies: {
            microphone: '()',
          },
        },
      });
    });
  });
  describe('with MC_APP_ENV=development and NODE_ENV=production', () => {
    it('should process the config where the MC_APP_ENV variable takes precedence over NODE_ENV', () => {
      const result = processConfig(
        createTestOptions({
          processEnv: {
            NODE_ENV: 'production',
            MC_APP_ENV: 'development',
          },
        })
      );
      expect(result).toEqual({
        env: {
          applicationId: undefined,
          applicationName: 'avengers-app',
          entryPointUriPath: 'avengers',
          cdnUrl: 'http://localhost:3001/',
          env: 'development',
          frontendHost: 'localhost:3001',
          location: 'gcp-eu',
          mcApiUrl: 'https://mc-api.europe-west1.gcp.commercetools.com',
          numberOfMovies: 4,
          revision: '',
          servedByProxy: false,
        },
        headers: {
          csp: {
            'connect-src': [
              'https://track.avengers.app',
              'https://mc-api.europe-west1.gcp.commercetools.com',
            ],
            'script-src': ['https://track.avengers.app'],
            'style-src': [],
          },
          featurePolicies: {
            microphone: 'none',
          },
          permissionsPolicies: {
            microphone: '()',
          },
        },
      });
    });
  });
  describe('with MC_APP_ENV=staging and NODE_ENV=production', () => {
    it('should process the config in production mode', () => {
      const result = processConfig(
        createTestOptions({
          processEnv: {
            NODE_ENV: 'production',
            MC_APP_ENV: 'staging',
          },
        })
      );
      expect(result).toEqual({
        env: {
          applicationId: undefined,
          applicationName: 'avengers-app',
          entryPointUriPath: 'avengers',
          cdnUrl: 'https://cdn.avengers.app/',
          env: 'staging',
          frontendHost: 'avengers.app',
          location: 'gcp-eu',
          mcApiUrl: 'https://mc-api.europe-west1.gcp.commercetools.com',
          numberOfMovies: 4,
          revision: '',
          servedByProxy: true,
        },
        headers: {
          csp: {
            'connect-src': [
              'https://track.avengers.app',
              'https://mc-api.europe-west1.gcp.commercetools.com',
              'https://avengers.app/',
            ],
            'script-src': [
              'https://track.avengers.app',
              'https://avengers.app/',
              'https://cdn.avengers.app/',
            ],
            'style-src': ['https://avengers.app/', 'https://cdn.avengers.app/'],
          },
          featurePolicies: {
            microphone: 'none',
          },
          permissionsPolicies: {
            microphone: '()',
          },
        },
      });
    });
  });
});

describe('processing a config with environment variable placeholders', () => {
  beforeEach(() => {
    loadConfig.mockReturnValue(fixtureConfigEnvVariables);
  });
  it('should process the config and prepare the application environment and headers', () => {
    const result = processConfig(
      createTestOptions({
        processEnv: {
          APP_URL: 'https://avengers.app',
          CLOUD_IDENTIFIER: 'gcp-eu',
          NODE_ENV: 'test',
        },
      })
    );
    expect(result).toEqual({
      env: {
        applicationId: undefined,
        applicationName: 'avengers-app',
        entryPointUriPath: 'avengers',
        cdnUrl: 'http://localhost:3001/',
        env: 'test',
        frontendHost: 'localhost:3001',
        location: 'gcp-eu',
        mcApiUrl: 'https://mc-api.europe-west1.gcp.commercetools.com',
        revision: '',
        servedByProxy: false,
      },
      headers: {
        csp: {
          'connect-src': ['https://mc-api.europe-west1.gcp.commercetools.com'],
          'script-src': [],
          'style-src': [],
        },
      },
    });
  });
  describe('with NODE_ENV=production', () => {
    it('should process the config as if for production', () => {
      const result = processConfig(
        createTestOptions({
          processEnv: {
            APP_URL: 'https://avengers.app',
            CLOUD_IDENTIFIER: 'gcp-eu',
            NODE_ENV: 'production',
          },
        })
      );
      expect(result).toEqual({
        env: {
          applicationId: undefined,
          applicationName: 'avengers-app',
          entryPointUriPath: 'avengers',
          cdnUrl: 'https://avengers.app/',
          env: 'production',
          frontendHost: 'avengers.app',
          location: 'gcp-eu',
          mcApiUrl: 'https://mc-api.europe-west1.gcp.commercetools.com',
          revision: '',
          servedByProxy: true,
        },
        headers: {
          csp: {
            'connect-src': [
              'https://mc-api.europe-west1.gcp.commercetools.com',
              'https://avengers.app/',
            ],
            'script-src': ['https://avengers.app/'],
            'style-src': ['https://avengers.app/'],
          },
        },
      });
    });
  });
  describe('with MC_APP_ENV=development and NODE_ENV=production', () => {
    it('should process the config where the MC_APP_ENV variable takes precedence over NODE_ENV', () => {
      const result = processConfig(
        createTestOptions({
          processEnv: {
            APP_URL: 'https://avengers.app',
            CLOUD_IDENTIFIER: 'gcp-eu',
            NODE_ENV: 'production',
            MC_APP_ENV: 'development',
          },
        })
      );
      expect(result).toEqual({
        env: {
          applicationId: undefined,
          applicationName: 'avengers-app',
          entryPointUriPath: 'avengers',
          cdnUrl: 'http://localhost:3001/',
          env: 'development',
          frontendHost: 'localhost:3001',
          location: 'gcp-eu',
          mcApiUrl: 'https://mc-api.europe-west1.gcp.commercetools.com',
          revision: '',
          servedByProxy: false,
        },
        headers: {
          csp: {
            'connect-src': [
              'https://mc-api.europe-west1.gcp.commercetools.com',
            ],
            'script-src': [],
            'style-src': [],
          },
        },
      });
    });
  });
  describe('with MC_APP_ENV=staging and NODE_ENV=production', () => {
    it('should process the config in production mode', () => {
      const result = processConfig(
        createTestOptions({
          processEnv: {
            APP_URL: 'https://avengers.app',
            CLOUD_IDENTIFIER: 'gcp-eu',
            NODE_ENV: 'production',
            MC_APP_ENV: 'staging',
          },
        })
      );
      expect(result).toEqual({
        env: {
          applicationId: undefined,
          applicationName: 'avengers-app',
          entryPointUriPath: 'avengers',
          cdnUrl: 'https://avengers.app/',
          env: 'staging',
          frontendHost: 'avengers.app',
          location: 'gcp-eu',
          mcApiUrl: 'https://mc-api.europe-west1.gcp.commercetools.com',
          revision: '',
          servedByProxy: true,
        },
        headers: {
          csp: {
            'connect-src': [
              'https://mc-api.europe-west1.gcp.commercetools.com',
              'https://avengers.app/',
            ],
            'script-src': ['https://avengers.app/'],
            'style-src': ['https://avengers.app/'],
          },
        },
      });
    });
  });
});

describe('when app URL is malformed', () => {
  beforeEach(() => {
    loadConfig.mockReturnValue({
      ...fixtureConfigSimple,
      env: {
        production: {
          url: 'wrong url',
        },
      },
    });
  });
  it('should throw', () => {
    expect(() =>
      processConfig(
        createTestOptions({
          processEnv: {
            NODE_ENV: 'production',
          },
        })
      )
    ).toThrowErrorMatchingInlineSnapshot(
      `"Invalid application URL: \\"wrong url\\""`
    );
  });
});
describe('when CDN URL is malformed', () => {
  beforeEach(() => {
    loadConfig.mockReturnValue({
      ...fixtureConfigSimple,
      env: {
        production: {
          url: 'https://avengers.app',
          cdnUrl: 'wrong url',
        },
      },
    });
  });
  it('should throw', () => {
    expect(() =>
      processConfig(
        createTestOptions({
          processEnv: {
            NODE_ENV: 'production',
          },
        })
      )
    ).toThrowErrorMatchingInlineSnapshot(
      `"Invalid application CDN URL: \\"wrong url\\""`
    );
  });
});
describe('when MC API URL is malformed', () => {
  beforeEach(() => {
    loadConfig.mockReturnValue({
      ...fixtureConfigSimple,
      mcApiUrl: 'wrong url',
    });
  });
  it('should throw', () => {
    expect(() =>
      processConfig(createTestOptions())
    ).toThrowErrorMatchingInlineSnapshot(
      `"Invalid MC API URL: \\"wrong url\\""`
    );
  });
});
