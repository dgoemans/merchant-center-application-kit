module.exports = {
  runner: 'jest-runner-executor',
  displayName: 'vale',
  moduleFileExtensions: ['md', 'mdx'],
  modulePathIgnorePatterns: ['build', 'dist', 'public/', 'CHANGELOG.md'],
  testMatch: ['<rootDir>/website/**/*.md', '<rootDir>/website/**/*.mdx'],
  watchPlugins: ['jest-watch-typeahead/filename'],
};
