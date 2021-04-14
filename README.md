# ts-jest

Testing to use jest instead default test configuration.

## Base project and changes

Project initialized using https://github.com/bitjson/typescript-starter

**Changes:**

- Removed default tests and packages
- Removed coverage scripts and packages
- Removed git page publish
- Removed change log tools

## Added jest

Following describe steps for adding jest https://itnext.io/testing-with-jest-in-typescript-cc1cd0095421

Updated jest.config.js with configuration of https://basarat.gitbook.io/typescript/intro-1/jest

```js
/* eslint-disable */

module.exports = {
  roots: ['<rootDir>/src'],
  testMatch: ['**/?(*.)+(spec|test).+(ts)'],
  transform: {
    '^.+\\.(ts)$': 'ts-jest',
  },
};
```

Fixed issue https://github.com/Microsoft/TypeScript/issues/31226 adding

```json
  "types": ["@types/jest"],
```

For any change review official documentation: https://jestjs.io/docs/cli
