import React, { useEffect, useRef, useState } from 'react'

function DemoUseRef() {
    const inputRef = useRef(null);
    const intervalTime = useRef(null);
    const [time, setTime] = useState(0);
    console.log("re-reder");
    useEffect(() => {
        // console.log(inputRef);
        inputRef.current.focus();
    }, []);
    const handleStart = () => {
        console.log(intervalTime);
        intervalTime.current = setInterval(() => {
            setTime((prev) => prev + 1);
        }, 1000)
    }
    const handleStop = () => {
        clearInterval(intervalTime.current);
    }
    return (
        <>
            <div>DemoUseRef</div>
            <input type='text' ref={inputRef} />

            <h3>Time : {time}</h3>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stopp</button>
        </>

    )
}

export default DemoUseRef