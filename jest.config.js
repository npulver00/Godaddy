module.exports = { 
  preset: "ts-jest",
  testEnvironment: "node",
  testPathIgnorePatterns: ["/node_modules/", "tests/pageObjects/"],
  testTimeout: 15000
};

