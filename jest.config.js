module.exports = {
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/test/__mocks__/styleMock.js',
  },
  setupFiles: ['jest-canvas-mock'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect']
};