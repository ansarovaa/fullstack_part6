import React from 'react'
import {creationAnecdote} from "../reducers/anecdoteReducer"
import {useDispatch} from 'react-redux'
import reducer from '../reducers/anecdoteReducer'
import {createStore} from 'redux'

const AnecdoteForm = () => {
    // eslint-disable-next-line no-unused-vars
    const dispatch = useDispatch()
    const store = createStore(reducer)
    const createAnecdote = (event) => {
        event.preventDefault()
        const anecdote = event.target.anecdote.value
        store.dispatch(creationAnecdote(anecdote))
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