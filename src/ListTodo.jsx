import React, { useContext } from 'react'
import { contextTodo } from './Todo';

function ListTodo() {
    const { todo } = useContext(contextTodo);

    console.log(todo);
    return (
        <>
            <div
                className="table-responsive"
            >
                <table
                    className="table table"
                >
                    <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                            <th scope="col">Actiion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todo.map((item, index) =>
                            <tr className="">
                                <td scope="row">{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{!item.status ? 'inprosess' : 'done'}</td>
                                <td>
                                    <input type="checkbox" name="" id="" />
                                </td>
                            </tr>
                        )}


                    </tbody>
                </table>
            </div>

        </>
    )
}

export default ListTodo