import React, {useState} from "react";

function Counter(){

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1)
    }

    const reset = () => {
        setCount(0)
    }

    return(
        <div className="counter-container">
            <p className="count-display">{count}</p>
            <button className="increment-button" onClick={increment}>Increase</button>
            <button className="decrement-button" onClick={decrement}>Decrease</button>
            <button className="reset=button" onClick={reset}>Reset</button>
        </div>
    )
}

export default Counter