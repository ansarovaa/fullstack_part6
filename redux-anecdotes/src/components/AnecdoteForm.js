import React from 'react'
import {creationAnecdote} from "../reducers/anecdoteReducer"
import {connect} from 'react-redux'
import {showNotification} from "../reducers/notificationReducer"

const AnecdoteForm = (props) => {

    const createAnecdote = async(event) => {
        event.preventDefault()
        const anecdote = event.target.anecdote.value
        event.target.anecdote.value = ''
        props.creationAnecdote(anecdote)
        props.showNotification(`Anecdote is created hooray! ${anecdote}`, 5)
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

const mapDispatchToProps = {
    creationAnecdote,
    showNotification
}

export default connect(null, mapDispatchToProps)(AnecdoteForm)