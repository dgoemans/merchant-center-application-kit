require('unfetch/polyfill');
require('jest-enzyme');
require('@testing-library/jest-dom/extend-expect');
require('./polyfills/intl');

const ShallowWrapper = require('enzyme/ShallowWrapper');
const { configure: configureRtl } = require('@testing-library/react');
const configureEnzymeExtensions = require('@commercetools/enzyme-extensions');
const commerceToolsEnzymeMatchers = require('@commercetools/jest-enzyme-matchers');
const loadConfig = require('./load-config');

const jestConfig = loadConfig();

if (jestConfig.rtlConfig) {
  configureRtl(jestConfig.rtlConfig);
}
if (jestConfig.enzymeConfig) {
  Enzyme.configure(jestConfig.enzymeConfig);
}

expect.extend({
  toBeComponentWithName(received, actual) {
    const pass = received && received.displayName === actual;
    const message = () =>
      `expected ${received} ${pass ? 'not ' : ''} to be ${actual}`;
    return { message, pass };
  },
});

expect.extend(commerceToolsEnzymeMatchers);
configureEnzymeExtensions(ShallowWrapper);
