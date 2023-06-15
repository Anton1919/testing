import {getValue} from "./getValue";

describe('get value', function () {
    test('value', () => {
        expect(getValue({})).toBe(0)
    })

    test('value', () => {
        expect(getValue({
            counter: { value: 100 }
        })).toBe(100)
    })
});
