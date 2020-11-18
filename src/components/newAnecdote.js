import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import {showNotificationAdd} from './../reducers/notificationReducer'

const NewAnecdote = () => {

  const dispatch = useDispatch()
  
  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.content.value  //input=name="content"
    event.target.content.value = ""  // tyhjentää näytön kenttä
    dispatch(createAnecdote(content))
    dispatch(showNotificationAdd(`you add  '${content}'`))
    setTimeout( () => { dispatch(showNotificationAdd("")) }, 5000)
  }

  return (
    <form onSubmit={addAnecdote}>
      <input name="content" />
      <button type="submit">add</button>
    </form>
  )

}

export default NewAnecdote