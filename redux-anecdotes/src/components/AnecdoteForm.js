import React from 'react'
import {creationAnecdote} from "../reducers/anecdoteReducer"
import {useDispatch} from 'react-redux'
import {showNotification, removeNotification} from "../reducers/notificationReducer";

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const createAnecdote = (event) => {
        event.preventDefault()
        const anecdote = event.target.anecdote.value
        dispatch(creationAnecdote(anecdote))
        dispatch(showNotification(`Anecdote is created hooray! ${anecdote}`));
        setTimeout(() => dispatch(removeNotification()), 5000);
    }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={createAnecdote}>
                <div><input name="anecdote"/></div>
                <button type="submit">create</button>
            </form>
        </div>
    )
}

export default AnecdoteForm