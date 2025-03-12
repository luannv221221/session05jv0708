import React, { useContext, useState } from 'react'
import { contextTodo } from './Todo';

function CreateTodo() {

    const { handleAddTodo } = useContext(contextTodo);

    const [valueInput, setValueInput] = useState("");
    const handleSubmitForm = (e) => {
        e.preventDefault();
        handleAddTodo({ name: valueInput, status: false });
        setValueInput("");
    }
    return (
        <>
            <form className="row g-3" onSubmit={handleSubmitForm}>
                <div className="col-auto">
                    <label className="visually-hidden">Tên công việc</label>
                    <input type="text" className="form-control" value={valueInput} onChange={(e) => setValueInput(e.target.value)} />
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary mb-3">Confirm identity</button>
                </div>
            </form>
        </>
    )
}

export default CreateTodo