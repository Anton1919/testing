import {fireEvent, getByTestId, render} from "@testing-library/react";
import {Provider} from "react-redux";
import {createReduxStore} from "../store/store";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

describe('Counter test', () => {
    test('value title', () => {
        const {getByTestId} = render(<Provider store={createReduxStore({
            counter: { value: 1 }
        })}><Counter/></Provider>)
        const incrementBtn = getByTestId('increment-btn')
        expect(getByTestId('value-title')).toHaveTextContent('1')
        fireEvent.click(incrementBtn)
        expect(getByTestId('value-title')).toHaveTextContent('2')
    })
})
