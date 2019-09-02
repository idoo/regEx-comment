module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ["**/__tests__/**/*.test.ts"],
  collectCoverageFrom: ["src/index.ts"],
  globals: {
    'ts-jest': {
      tsConfig: './__tests__/tsconfig.test.json'
    }
  }
};
