import React from 'react'
import { createStore, combineReducers} from 'redux'
//import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducerAnecdote, { initializeAnecdotes } from './reducers/anecdoteReducer'
import reducerNotif from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'
import anecdoteService from './services/anecdotes'

const reducer = combineReducers({
  anecdotes: reducerAnecdote,
  statenotif: reducerNotif,
  statefilter: filterReducer
})
const store = createStore(reducer, composeWithDevTools())

anecdoteService.getAll().then(anecdotes =>
  store.dispatch(initializeAnecdotes(anecdotes))
)

//export const storeNotif = createStore(reducerNotif)

//composeWithDevTools()  //redux-devtools-extension

export default store