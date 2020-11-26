import React, {useEffect} from 'react'
import { connect } from 'react-redux' 
import {voteAnecdote} from './../reducers/anecdoteReducer'
import {showNotificationVote} from './../reducers/notificationReducer'

const Anecdote = ({anecdote, handleClick}) => {
//console.log('anecdote 2:', anecdote)
  return(
    <li>
      {anecdote.content} <br></br>has {anecdote.votes}
      <button onClick={handleClick} >vote</button>
    </li>

  )
}

const AnecdoteList = (props) => {
  
  //console.log('ennen sorttia:', anecdotes)
  props.anecdotes.sort((a,b) => b.votes - a.votes)
  //console.log('Anecdotes2:', anecdotes2)
  return(
    <ul>
      {props.anecdotes.map(anecdote =>
        <Anecdote key={anecdote.id}
          anecdote = {anecdote}
          handleClick={() => {
            const anecd = anecdote
            anecd.votes = anecd.votes + 1
            props.voteAnecdote(anecd)
            
            props.showNotificationVote(`you voted '${anecdote.content}'`, 5)
          }}
          />   
      )}
      
    </ul>
  )
}
 
const mapStateToProps = (state) => {
  
      return {anecdotes: state.anecdotes}
}

const mapDispatchToProps = {
  voteAnecdote,
  showNotificationVote
}

// eksportoidaan suoraan connectin palauttama komponentti
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)