// /** @type {import('ts-jest').JestConfigWithTsJest} **/

// module.exports = {
//   preset: "ts-jest",
//   testEnvironment: "node",
//   transform: {
//     "^.+.tsx?$": ["ts-jest", {}],
//   },
//   // testMatch: ["<rootDir>/tests/**/*.test.ts"],
//   testPathIgnorePatterns: ["<rootDir>/dist"],
// };

import type { Config } from 'jest';

const config: Config = {
  preset: "ts-jest",
  verbose: true,
  testMatch: ["<rootDir>/tests/**/*.test.ts"],
  testPathIgnorePatterns: ["<rootDir>/dist"],
};

export default config;