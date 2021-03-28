/* eslint-disable default-case */
const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
    return {content: anecdote, id: getId(), votes: 0}
}


const reducer = (state = [], action) => {
    console.log('state now: ', state)
    console.log('action', action)
    switch (action.type) {
        case 'INIT_LIST':
            return action.data;
        case 'VOTE':
            return state.map((anecdote) => anecdote.id === action.data.id
                ? {
                    ...anecdote,
                    votes: anecdote.votes + 1
                }
                : anecdote);
        case 'NEW_ANECDOTE':
            return [
                ...state,
                action.data
            ];
        default:
            return state;
    }
}

export const initializeAnecdotes = (anecdotes) => {
  return {
    type: 'INIT_LIST',
    data: anecdotes,
  }
}

export const voteAnecdote = (id) => ({type: "VOTE", data: {
        id
    }})

export const creationAnecdote = (anecdote) => ({
    type: 'NEW_ANECDOTE',
    data: {
        content: anecdote,
        id: getId(),
        votes: 0
    }
})

export default reducer