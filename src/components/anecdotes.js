import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {voteAnecdote} from './../reducers/anecdoteReducer'
import {showNotificationVote} from './../reducers/notificationReducer'
import Notification from './Notification'
import Filter from './filter'

const Anecdote = ({anecdote, handleClick}) => {
//console.log('anecdote 2:', anecdote)
  return(
    <li>
      {anecdote.content} <br></br>has {anecdote.votes}
      <button onClick={handleClick} >vote</button>
    </li>

  )
}

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const dispatch = useDispatch()
console.log('ennen sorttia:', anecdotes)
  anecdotes.sort((a,b) => b.votes - a.votes)
  //console.log('Anecdotes2:', anecdotes2)
  return(
    <ul>
      {anecdotes.map(anecdote =>
        <Anecdote key={anecdote.id}
          anecdote = {anecdote}
          handleClick={() => {
            
            dispatch(voteAnecdote(anecdote.id))
            dispatch(showNotificationVote(`you voted  '${anecdote.content}'`))
            setTimeout( () => { dispatch(showNotificationVote("")) }, 5000) 
          }}
          />   
      )}
      
    </ul>
  )
}

const AnecdoteForm = () => {
  return (
    <div>
      <Notification/>
      <AnecdoteList/>
      <Filter/>
    </div>
  )
}

export default AnecdoteForm