# Jest Test Repo

This repo shows the problem with modern timers implementation when using some of the libraries

## How to reproduce

1. Clone this repo
2. Run `npm ci`
3. Run `npm test`

    The test should fail with error
    ```sh
    > jest27-fake-timers-hangs@1.0.0 test /workspaces/js-ts/jest27-fake-timers-hangs
    > jest

    FAIL  src/index.test.js (5.204 s)
    test
        ✕ test (5001 ms)

    ● test › test

        thrown: "Exceeded timeout of 5000 ms for a test.
        Use jest.setTimeout(newTimeout) to increase the timeout value, if this is a long-running test."

        6 |
        7 | describe('test', () => {
        >  8 |     it('test', async () => {
            |     ^
        9 |         const p = fn();
        10 |
        11 |         // code below doesn't help with modern timers

        at src/index.test.js:8:5
        at Object.<anonymous> (src/index.test.js:7:1)

    Test Suites: 1 failed, 1 total
    Tests:       1 failed, 1 total
    Snapshots:   0 total
    Time:        5.234 s, estimated 6 s
    Ran all test suites.
    npm ERR! Test failed.  See above for more details.
    ```
4. The way to fix this issue are
   1. Install previous version of jest - `npm i jest@^26` as it uses legacy timer as default
   2. Change timers to either real or legacy in `jest.config.js`