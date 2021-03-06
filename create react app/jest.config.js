module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ["**/*.{js,jsx}"],
    coverageReporters: ["text", "lcov", "json"],
    preset: "jest-puppeteer",
    // setupFilesAfterEnv: ["jest-puppeteer-istanbul/lib/setup"],
    // reporters: ["default", "jest-puppeteer-istanbul/lib/reporter"],
    coverageDirectory: "coverage_result",
}
