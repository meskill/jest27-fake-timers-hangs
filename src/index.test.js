const { fn } = require('./index');

// None of the switches below are working
// jest.useRealTimers();
// jest.useFakeTimers('legacy')

describe('test', () => {
    it('test', async () => {
        const p = fn();

        // code below doesn't help with modern timers
        // jest.runAllTimers();
        // jest.runAllTicks();

        await p;
    });
});