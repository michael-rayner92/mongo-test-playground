import { defaults as tsjPreset } from "ts-jest/presets";

export default {
  preset: "@shelf/jest-mongodb",
  transform: tsjPreset.transform,
  coverageDirectory: "coverage",
  testMatch: ["**/?(*.)+(spec).ts"],
  collectCoverageFrom: ["src/**/*.ts"],
  collectCoverage: true,
  resetMocks: true,
  clearMocks: true,
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0
    }
  },
  moduleNameMapper: {},
  watchPathIgnorePatterns: ["globalConfig"],
  testPathIgnorePatterns: [
    "<rootDir>/build/",
    "<rootDir>/node_modules/",
    "<rootDir>/globalConfig.json"
  ]
};

// const { defaults: tsjPreset } = require("ts-jest/presets");

// module.exports = {
//   preset: "@shelf/jest-mongodb",
//   transform: tsjPreset.transform,
//   coverageDirectory: "./coverage",
//   testMatch: ["**/?(*.)+(spec).ts"],
//   collectCoverageFrom: ["src/**/*.ts"],
//   collectCoverage: true,
//   resetMocks: true,
//   clearMocks: true,
//   watchPathIgnorePatterns: ["globalConfig"]
// };
