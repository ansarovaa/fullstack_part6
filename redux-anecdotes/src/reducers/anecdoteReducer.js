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

export const creationAnecdote = (data) => ({
    type: 'NEW_ANECDOTE',
    data
})

export default reducer