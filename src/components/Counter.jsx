import React from "react";
import { decrement, increment } from "../store/counterSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Counter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <>
            <div className="counter-main">
                <button onClick={() => dispatch(increment())}>Increment</button>
                <span>{count}</span>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
            </div>
        </>
    );
}
