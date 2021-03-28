import React from 'react'
import {creationAnecdote} from "../reducers/anecdoteReducer"
import {useDispatch} from 'react-redux'
import {showNotification, removeNotification} from "../reducers/notificationReducer"
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const createAnecdote = async(event) => {
        event.preventDefault()
        const anecdote = event.target.anecdote.value
        const newAnecdote = await anecdoteService.createNew(anecdote)
        dispatch(creationAnecdote(newAnecdote))
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