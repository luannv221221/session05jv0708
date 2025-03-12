import React, { useContext } from 'react'
import { context } from './App2'

function C() {
    const { fullName } = useContext(context)
    return (
        <div>C {fullName}</div>
    )
}

export default C