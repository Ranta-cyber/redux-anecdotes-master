import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {voteAnecdote} from './../reducers/anecdoteReducer'

/* const vote = (id) => {
  
  console.log('vote', id)
  dispatch(voteAnecdote(id))
} */

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
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const anecdotes2  = anecdotes.sort((a,b) => b.votes - a.votes)
  //console.log('Anecdotes2:', anecdotes2)
  return(
    <ul>
      
      {anecdotes.map(anecdote =>
        <Anecdote key={anecdote.id}
          anecdote = {anecdote}
          handleClick={() => dispatch(voteAnecdote(anecdote.id))}
          />   
      )}
      
    </ul>
  )
}

const AnecdoteForm = () => {
  
  return (
    <div>
      
      <AnecdoteList/>
    </div>
  )



}

export default AnecdoteForm