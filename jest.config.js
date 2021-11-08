module.exports = {
	setupFilesAfterEnv: ['./jest.setup.js'],
	testEnvironment: 'jsdom',
	modulePathIgnorePatterns: ['<rootDir>/tests/'],
};
