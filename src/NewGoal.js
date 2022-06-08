import React, { useState } from 'react';

function NewGoal(props) {
    const [title, setTitle] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const newGoal = {
            key: Math.random().toString(),
            title: title
        }
        setTitle('');
        props.onAddGoal(newGoal);
    }

    const handleChange = (e) => {
        setTitle(e.target.value);
    }
    return (
        <div className='my-2'>
            <form className='b4-form' onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="" className='pb-2'>Title</label>
                    <input type="text" value={title} className="form-control" name="title" id="title" aria-describedby="helpId" placeholder="" onChange={handleChange} />
                </div>
                <button type="submit" className="mt-4 btn btn-primary">Add newGoal</button>
            </form>
        </div>
    );
}

export default NewGoal;