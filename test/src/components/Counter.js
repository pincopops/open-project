import React, { useState } from "react";
import "../components_scss/_Counter.scss";

function Counter() {

    const [count, setCount] = useState(0);

    const handleCounterincrement = (event) => {
        setCount(count + 1)
    }

    const handleCounterDecrement = (event) => {
        setCount(count - 1)
    }
    
    const handleCounterReset = (event) => {
        setCount(count - count)
    }

    return (
        <>
            <span>You've clicked: 
                <span className="counter-field">{count} {count <= 1 ? "time" : "times"}</span>
                <button onClick={handleCounterincrement}>Increment</button>
                <button onClick={handleCounterDecrement} disabled={count === 0 ? true : false}>Decrement</button>
                <button onClick={handleCounterReset}>Reset!!!</button>
            </span>


        </>
    )
}

export default Counter