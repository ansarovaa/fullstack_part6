import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {voteAnecdote} from "../reducers/anecdoteReducer"
import {showNotification, removeNotification} from "../reducers/notificationReducer";

const AnecdoteList = () => {
    const anecdotes = useSelector((state) => {
        const filteredAnecdotes = state
            .anecdotes          
        return filteredAnecdotes.sort((a, b) => b.votes - a.votes);
    });
    const dispatch = useDispatch()

    const vote = (id) => {
        console.log('vote', id)
        dispatch(voteAnecdote(id))
        dispatch(showNotification(`Voted!`));
        setTimeout(() => dispatch(removeNotification()), 5000);
    }

    return (
        <div>
            <h2>Anecdotes</h2>
            {anecdotes.map(anecdote => <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => vote(anecdote.id)}>vote</button>
                </div>
            </div>)}
        </div>
    )
}

export default AnecdoteList