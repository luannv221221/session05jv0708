import React, { useReducer } from 'react'


function DemoUseReducer() {
    const initalValue = 1;
    const reducer = (state, action) => {
        switch (action) {
            case "INCREMENT":
                return state + 10;

            case "DECREMENT":
                return state - 10;

            default:
                state;
        }
    }
    const [state, dispatch] = useReducer(reducer, initalValue);
    const handleIncrement = () => {
        dispatch("INCREMENT");
    }
    return (
        <>
            <h1>Value {state}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button>Decrement</button>
        </>
    )
}

export default DemoUseReducer