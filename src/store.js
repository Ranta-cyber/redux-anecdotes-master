import React from 'react'
import { createStore, combineReducers} from 'redux'
//import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducerAnecdote from './reducers/anecdoteReducer'
import reducerNotif from './reducers/notificationReducer'

const reducer = combineReducers({
  anecdotes: reducerAnecdote,
  statenotif: reducerNotif
}

)
const store = createStore(reducer, composeWithDevTools())

//export const storeNotif = createStore(reducerNotif)

//composeWithDevTools()  //redux-devtools-extension

export default store