import React, {useEffect} from 'react'
import AnecdoteList from './components/anecdotes'
import AnecdoteForm from './components/newAnecdote'
import Filter from './components/filter'
import Notification from './components/Notification'
import { initializeAnecdotes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'
//import anecdoteService from './services/anecdotes'
//import Notification from './components/Notification'



const App = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeAnecdotes()) 
  },[dispatch]) 

  return(
    <div>
      <h2>Anecdotes</h2>
      <Notification/>
      <AnecdoteForm/>
      <AnecdoteList/>
      <Filter/>
    </div>
  )

}

export default App