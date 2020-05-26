module.exports = {
    setupFiles: ['<rootDir>/scripts/setupTests.js'],
    moduleNameMapper: {
        '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules',
    },
};
