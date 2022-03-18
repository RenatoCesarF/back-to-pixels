/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.json');


module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: [
    '<rootDir>/src'
  ],
  transform: {
      '^.+\\.tsx?$': 'ts-jest'
  },
  moduleDirectories: ['node_modules', './src'],
  modulePaths: ["node_modules", "<rootDir>/src"],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, /* { prefix: '<rootDir>/' } */)
};