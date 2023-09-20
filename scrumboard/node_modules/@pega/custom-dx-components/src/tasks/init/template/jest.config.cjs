module.exports = {
  verbose: true,
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest'
  },
  collectCoverage: true,
  testPathIgnorePatterns: [],
  transformIgnorePatterns: [],
  modulePathIgnorePatterns: [],
  coveragePathIgnorePatterns: [],
  collectCoverageFrom: ['./node_modules/@pega/custom-dx-components/src/*.js'],
  coverageThreshold: {
    global: {
      statements: 79,
      branches: 74,
      functions: 81,
      lines: 80
    }
  }
};
