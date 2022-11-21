import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react'

function Todoform(props) {

const [input, setInput] = useState(props.edit ? props.edit.value : "");

const inputRef = useRef(null)

useEffect(() => {
    inputRef.current.focus()
})

const handleChange = e => {
    setInput(e.target.value);
}

const handleSubmit = e => {
    e.preventDefault();
//Function is needed to prevent refreshing of the browser page after button click
    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
    text: input
//generates random id
    })
    setInput('');
}



  return (
    
        <form className='todo-form' onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                <input 
                type="text"
                placeholder='Update your item'
                value={input}
                name="text"
                className='todo-input edit'
                onChange={handleChange}
                ref={inputRef}
                />
                <button className='todo-button edit'>Update</button>
                </>
            ) : (<>
                <input 
                    type="text"
                    placeholder='Add a todo'
                    value={input}
                    name="text"
                    className='todo-input'
                    onChange={handleChange}
                    ref={inputRef}
                    />
                    <button className='todo-button'>Add todo</button>
                    </>
                )}
            
        </form>

  )
}

export default Todoform