import React from 'react'
import { useDispatch } from 'react-redux'
import { reducerCreatorFilter } from '../reducers/filterReducer'
import { filterAnecdotes } from './../reducers/anecdoteReducer'
const Filter = () => {
  //const anecdotes = useSelector(state => state.anecdotes)
  const dispatch = useDispatch()
  const handleChange = (event) => {
    dispatch(reducerCreatorFilter(event.target.value))
    dispatch(filterAnecdotes(event.target.value))
    // input-kentän arvo muuttujassa event.target.value
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter