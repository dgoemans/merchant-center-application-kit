require('unfetch/polyfill');
require('@testing-library/jest-dom/extend-expect');
require('./polyfills/intl');

const { configure: configureRtl } = require('@testing-library/react');
const loadConfig = require('./load-config');

const jestConfig = loadConfig();

if (jestConfig.rtlConfig) {
  configureRtl(jestConfig.rtlConfig);
}

if (jestConfig.enzymeConfig) {
  if (!Enzyme)
    throw new Error(
      '@commercetools-frontend/jest-preset-mc-app: Enzyme is not globally available please ensure it is before configuring it.'
    );

  Enzyme.configure(jestConfig.enzymeConfig);
}

if (jestConfig.expectConfig) {
  if (jestConfig.expectConfig.extend) {
    expect.extend(jestConfig.expectConfig.extend);
  }
}
