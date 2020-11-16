import React from 'react'
import AnecdoteList from './components/anecdotes'
import AnecdoteForm from './components/newAnecdote'
const App = () => {
  
  return(
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteForm/>
      <AnecdoteList/>
    </div>
  )

}

export default App