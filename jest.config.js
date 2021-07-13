module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  transform: {
    "^.+\\.vue$": "vue-jest",
  },
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    "<rootDir>/src/*/__tests__/",
    "<rootDir>/src/config/",
    "<rootDir>/node_modules/",
  ],
  coverageDirectory: "<rootDir>/coverage",
  reporters: ["default"],
  coverageReporters: ["html", "text", "text-summary"],
};
