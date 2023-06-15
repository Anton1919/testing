import {counterActions, counterReducer} from "./counterReducer";

describe("reducer test", () => {
    test('increment', () => {
        expect(counterReducer({value: 0}, counterActions.increment())).toEqual({value: 1})
    })

    test('decrement', () => {
        expect(counterReducer({value: 1}, counterActions.decrement())).toEqual({value: 0})
    })
})
