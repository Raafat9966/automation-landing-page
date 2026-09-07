const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

/** @type {import('jest').Config} */
const customJestConfig = {
  testEnvironment: 'jsdom',
  setupFiles: ['<rootDir>/jest.polyfills.ts'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  collectCoverageFrom: ['app/**/*.{ts,tsx}', '!app/**/layout.tsx', '!app/**/globals.css'],
  testMatch: ['**/__tests__/**/*.(ts|tsx|js|jsx)'],
}

// next/jest wires up the SWC transform automatically — no babel.config.js needed,
// which also keeps `next build` on SWC instead of falling back to Babel.
module.exports = createJestConfig(customJestConfig)
