import React, { createContext, useState } from 'react'
import CreateTodo from './CreateTodo'
import ListTodo from './ListTodo'
export const contextTodo = createContext();
function Todo() {
    const [todo, setTodo] = useState([]);

    const handleAddTodo = (data) => {
        setTodo([...todo, data]);
    }
    return (
        <>
            <div
                className="container"
            >
                <div className="row">
                    <contextTodo.Provider value={{ todo, handleAddTodo }}>
                        <CreateTodo />
                        <ListTodo />
                    </contextTodo.Provider>

                </div>

            </div>


        </>
    )
}

export default Todo