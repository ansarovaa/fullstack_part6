import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {voteAnecdote} from "../reducers/anecdoteReducer"
import {showNotification, removeNotification} from "../reducers/notificationReducer"
import Filter from './Filter'

const AnecdoteList = () => {
    const anecdotes = useSelector((state) => {
        const filteredAnecdotes = state.anecdotes.filter((a) =>
        a.content.toLowerCase().includes(state.filter.toLowerCase())
        );
        return filteredAnecdotes.sort((a, b) => b.votes - a.votes);
    });
    const dispatch = useDispatch()

    const vote = (anecdote) => {
        console.log('vote', anecdote)
        dispatch(voteAnecdote(anecdote))
        dispatch(showNotification(`Voted!`));
        setTimeout(() => dispatch(removeNotification()), 5000);
    }

    return (
        <div>
            <h2>Anecdotes</h2>
            <Filter />
            {anecdotes.map(anecdote => <div key={anecdote.id}>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => vote(anecdote)}>vote</button>
                </div>
            </div>)}
        </div>
    )
}

export default AnecdoteList