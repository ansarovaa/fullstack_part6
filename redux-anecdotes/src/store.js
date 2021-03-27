import { createStore, combineReducers } from "redux"
import anecdoteReducer from "./reducers/anecdoteReducer"


const reducer = combineReducers({
  anecdotes: anecdoteReducer
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store