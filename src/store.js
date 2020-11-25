import React from 'react'
import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducerAnecdote, { initializeAnecdotes } from './reducers/anecdoteReducer'
import reducerNotif from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'
import reducerTimer from './reducers/reducerTimer'
import anecdoteService from './services/anecdotes'

const reducer = combineReducers({
  anecdotes: reducerAnecdote,
  statenotif: reducerNotif,
  statefilter: filterReducer,
  stateTimer: reducerTimer
})
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

anecdoteService.getAll().then(anecdotes =>
  store.dispatch(initializeAnecdotes(anecdotes))
)

//export const storeNotif = createStore(reducerNotif)

//composeWithDevTools()  //redux-devtools-extension

export default store