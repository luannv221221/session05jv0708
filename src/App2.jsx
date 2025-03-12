import React, { useState, createContext } from 'react'
import A from './A'
import B from './B'

export const context = createContext();
function App2() {
    const [fullName, setFullName] = useState("Hằng Du mục");
    const changeFullname = () => {
        setFullName("Hoa Hậu Thùy Tiên");
    }
    return (
        <>
            <div>App2</div>
            <context.Provider value={{ fullName, changeFullname }}>
                <A />
                <B />
            </context.Provider>

        </>
    )
}

export default App2