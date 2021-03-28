import anecdoteService from '../services/anecdotes'

const reducer = (state = [], action) => {
    console.log('state now: ', state)
    console.log('action', action)
    switch (action.type) {
        case 'INIT_LIST':
            return action.data;
        case 'VOTE':
            let anecdote = state.find(a => a.id === action.data.id)
            anecdote.votes = anecdote.votes + 1
            return state.map(a => a.id === anecdote.id
                ? anecdote
                : a)
        case 'NEW_ANECDOTE':
            return [
                ...state,
                action.data
            ];
        default:
            return state;
    }
}

export const initializeAnecdotes = () => {
    return async dispatch => {
        const anecdotes = await anecdoteService.getAll()
        dispatch({type: 'INIT_LIST', data: anecdotes})
    }
}

export const voteAnecdote = (anecdote) => {
    return async dispatch => {
        const updatedAnecdote = await anecdoteService.updateVote(anecdote.id, {
            ...anecdote,
            votes: anecdote.votes + 1
        })
        dispatch({type: 'VOTE', data: updatedAnecdote})
    }
}

export const creationAnecdote = anecdote => {
    return async dispatch => {
        const newAnecdote = await anecdoteService.createNew(anecdote)
        dispatch({type: 'NEW_ANECDOTE', data: newAnecdote})
    }
}

export default reducer