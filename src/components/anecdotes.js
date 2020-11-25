import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux' 
import store from '../store'
//import { useSelector, useDispatch } from 'react-redux'
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
  
  //const anecdotes = useSelector(state => state.anecdotes)
  //const dispatch = useDispatch()
  //console.log('ennen sorttia:', anecdotes)
  props.anecdotes.sort((a,b) => b.votes - a.votes)
  ////console.log('Anecdotes2:', anecdotes2)
  return(
    <ul>
      {props.anecdotes.map(anecdote =>
        <Anecdote key={anecdote.id}
          anecdote = {anecdote}
          handleClick={() => {
            const anecd = anecdote
            anecd.votes = anecd.votes + 1
            props.voteAnecdote(anecd)
            
            //dispatch(voteAnecdote(anecd))
            
            props.showNotificationVote(`you voted '${anecdote.content}'`, 5)
            
            //console.log('timer:', timer)
            //dispatch(showNotificationVote(`you voted  '${anecdote.content}'`))
            //setTimeout( () => { dispatch(showNotificationVote("")) }, 5000) 
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