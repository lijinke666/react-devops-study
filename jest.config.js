module.exports = {
  verbose: true,
  moduleFileExtensions: ['js', 'jsx', 'json'],
  transformIgnorePatterns: ['/node_modules/', '.history/*', 'lib', 'dist'],
  testURL: 'http://localhost',
  testEnvironment: 'node',
  rootDir: __dirname,
  modulePathIgnorePatterns: ['/.history/', 'lib', 'dist'],
  moduleDirectories: ['node_modules', '.', 'src', 'src/shared'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  }
}
