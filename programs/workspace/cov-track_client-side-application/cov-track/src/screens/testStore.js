import React, { useState } from 'react';
import { useTodoListStore } from '../stores/useStore';
import { purge } from '../utils/persist';
import "../styles/styles.css";

export function testStore() {
    const { data, create, update, remove, clear } = useTodoListStore()

    const [text, setText] = useState('')
    const onSubmit = () => {
        create({
            text,
            completed: false,
            date: new Date().toISOString()
        })
        setText('')
    }

    return (
        <div className="App">
            <div className="section">
                <button
                    onClick={() => {
                        clear()
                        purge()
                    }}>
                    Clear
          </button>
                <form
                    className="todo-item new"
                    onSubmit={(event) => {
                        event.preventDefault()
                        onSubmit()
                    }}>
                    <input
                        type="text"
                        value={text}
                        onChange={(event) => setText(event.target.value)}
                    />
                    <input type="submit" />
                </form>

                {data.map((item, index) => (
                    <div
                        key={index}
                        className={`todo-item ${item.completed ? 'completed' : ''}`}>
                        <input
                            type="checkbox"
                            onClick={() => {
                                update(item.id, {
                                    ...item,
                                    completed: !item.completed
                                })
                            }}
                            id={`checkbox-${index}`}
                        />
                        <label className="todo-item-text" htmlFor={`checkbox-${index}`}>
                            {item.text}
                        </label>
                        <button onClick={() => remove(item.id)}>Remove</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
