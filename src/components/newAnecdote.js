import React from 'react'
import { connect } from 'react-redux' 
//import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import {showNotificationAdd} from './../reducers/notificationReducer'
import anecdoteService from './../services/anecdotes'

const NewAnecdote = (props) => {

  //const dispatch = useDispatch()
  
  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.content.value  //input=name="content"
    event.target.content.value = ""  // tyhjentää näytön kenttä
    
    const NewAnecdote = await anecdoteService.createNew(content)
    props.createAnecdote(content)

    props.showNotificationAdd(`you add  '${content}'`, 5)
  }

  return (
    <form onSubmit={addAnecdote}>
      <input name="content" />
      <button type="submit">add</button>
    </form>
  )

}

const mapStateToProps = (state) => {
  
  return {anecdotes: state.anecdotes}
}

const mapDispatchToProps = {
  createAnecdote,
  showNotificationAdd
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewAnecdote)