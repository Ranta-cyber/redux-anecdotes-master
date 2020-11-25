import React from 'react'
import { connect } from 'react-redux' 
//import { useDispatch } from 'react-redux'
import { reducerCreatorFilter } from '../reducers/filterReducer'
import { filterAnecdotes } from './../reducers/anecdoteReducer'

const Filter = (props) => {
  //const anecdotes = useSelector(state => state.anecdotes)
  //const dispatch = useDispatch()
  const handleChange = (event) => {
    props.reducerCreatorFilter(event.target.value)
    props.filterAnecdotes(event.target.value)
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

const mapStateToProps = (state) => {
  return {anecdotes: state.anecdotes}
}

const mapDispatchToProps = {
  reducerCreatorFilter,
  filterAnecdotes
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter)