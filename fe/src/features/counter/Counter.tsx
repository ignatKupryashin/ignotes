import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store.ts";
import {incrementByAmount} from "./counterSlice.ts";


const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <p>count: {count}</p>
            <button onClick={() => dispatch(incrementByAmount(2))}>increment</button>
        </div>
    );
};

export default Counter;