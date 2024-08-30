/**
 * @type {import('@jest/types').Config.ProjectConfig}
 */
module.exports = {
  moduleDirectories: ['node_modules'],
  testEnvironment: 'node',
  projects: [
    '<rootDir>/service/jest.config.cjs',
    '<rootDir>/event/jest.config.cjs',
    '<rootDir>/job/jest.config.cjs',
  ],
  verbose: true,
  // Remove for console.logs
  silent: true,
};