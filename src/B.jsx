import React, { useContext } from 'react'
import { context } from './App2'

function B() {
    const { fullName, changeFullname } = useContext(context)
    return (
        <>
            <div>B {fullName}</div>
            <button onClick={changeFullname}>Change</button>
        </>
    )
}

export default B