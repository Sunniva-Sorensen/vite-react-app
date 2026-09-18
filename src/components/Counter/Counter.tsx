import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../state/counter/counterslice";
import type { AppDispatch, RootState } from "../../state/store";

export function Counter() {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => dispatch(increment())}>⬆️</button>
            <button onClick={() => dispatch(decrement())}>⬇️</button>
            <button onClick={() => dispatch({ type: "counter/incrementByAmount", payload: 10 })}>+10</button>
            <button onClick={() => dispatch({ type: "counter/reset" })}>Reset</button>
        </div>
    );
}