module.exports = {
  collectCoverage: true,
  coverageProvider: "v8",
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
    "!./*config.js",
    "!./.next/**",
    "!./coverage/**"
  ],
  moduleNameMapper: {
    /* Handle CSS imports (with CSS modules)
      https://jestjs.io/docs/webpack#mocking-css-modules */
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",

    // Handle CSS imports (without CSS modules)
    "^.+\\.(css|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
    "@next/font/(.*)": require.resolve(
      "next/dist/build/jest/__mocks__/nextFontMock.js"
    ),

    /* Handle image imports
      https://jestjs.io/docs/webpack#handling-static-assets */
    "^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$":
      "<rootDir>/__mocks__/fileMock.js",
  },
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
  testEnvironment: "jest-environment-jsdom",
  transform: {
    /* Use babel-jest to transpile tests with the next/babel preset
      https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object */
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
  transformIgnorePatterns: [
    "/node_modules/",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
