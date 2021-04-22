require('unfetch/polyfill');
require('jest-enzyme');
require('@testing-library/jest-dom/extend-expect');
require('./polyfills/intl');

const { configure: configureRtl } = require('@testing-library/react');
const loadConfig = require('./load-config');

const jestConfig = loadConfig();

if (jestConfig.rtlConfig) {
  configureRtl(jestConfig.rtlConfig);
}
if (jestConfig.enzymeConfig) {
  Enzyme.configure(jestConfig.enzymeConfig);
}
if (jestConfig.expectConfig) {
  if (jestConfig.expectConfig.extend) {
    expect.extend(jestConfig.expectConfig.extend);
  }
}
