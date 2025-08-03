import type { Config } from 'jest';

const config: Config = {
  displayName: 'vendor',
  preset: '../../jest.preset.js',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.[tj]sx?$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/packages/vendor',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
};

export default config; 