'use strict';

module.exports = {
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: './tests/(lib/.*\\.(jsx?|tsx?)|ast-alignment/spec\\.ts)$',
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  coverageReporters: ['text-summary', 'lcov'],
  globals: {
    'ts-jest': {
      diagnostics: {
        // ignore the diagnostic error for the invalidFileErrors fixtures
        ignoreCodes: [5056],
      },
    },
  },
};
