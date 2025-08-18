import { pathsToModuleNameMapper } from 'ts-jest';

import tsconfig from './tsconfig.json';

import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/test/**/*.test.ts'],
  moduleFileExtensions: ['ts', 'js', 'json'],
  roots: ['<rootDir>'],
  moduleNameMapper: pathsToModuleNameMapper(
    tsconfig.compilerOptions.paths || {},
    {
      prefix: '<rootDir>/src/',
    },
  ),
  verbose: false,
};

export default config;
