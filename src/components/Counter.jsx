import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getValue} from "../store/selectors/getValue";
import {counterActions} from "../store/reducers/counterReducer";

const Counter = () => {
    const dispatch = useDispatch()
    const value = useSelector(getValue)
    const {increment , decrement} = counterActions

    const onIncrement = () => {
        dispatch(increment())
    }
    const onDecrement = () => {
        dispatch(decrement())
    }

    return (
        <div>
            <h1>{value}</h1>
            <button onClick={onIncrement}>incr</button>
            <button onClick={onDecrement}>decr</button>
        </div>
    );
};

export default Counter;
