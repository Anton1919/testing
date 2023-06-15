import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getValue} from "../store/selectors/getValue";
import {counterActions} from "../store/reducers/counterReducer";

const Counter = () => {
    const dispatch = useDispatch()
    const value = useSelector(getValue)
    const {increment, decrement} = counterActions

    const onIncrement = () => {
        dispatch(increment())
    }
    const onDecrement = () => {
        dispatch(decrement())
    }

    return (
        <div>
            <h1 data-testid={'value-title'}>Value: {value}</h1>
            <button data-testid={'increment-btn'} onClick={onIncrement}>incr</button>
            <button data-testid={'decrement-btn'} onClick={onDecrement}>decr</button>
        </div>
    );
};

export default Counter;
