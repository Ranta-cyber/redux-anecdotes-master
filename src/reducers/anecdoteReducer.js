import anecdoteService from './../services/anecdotes'

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const reducerAnecdote = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case 'NEW_ANECDOTE':

      return [...state, action.data]
    case 'INCREMENT': {
      const id = action.data.id
      const anecdoteToChange = state.find(n => n.id === id)
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes
      }
      return state.map(anecdote =>
        anecdote.id !== id ? anecdote : changedAnecdote
      )

    }
    case 'FILTERING': {
      const filterText = action.data.toFilter

      if (filterText === '') {
        return initialState
      } else {
        return state.filter(el =>
          el.content.toLowerCase().indexOf(filterText.toLowerCase()) !== -1)
      }
    }
    case 'INIT_ANECDOTES':
      return action.data

    default: return state
  }
}

export const initializeAnecdotes = (anecdotes) => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export const voteAnecdote = (content) => {

  return async dispatch => {
    const id = content.id
    const updAnecdote = await anecdoteService.update(content)
    dispatch({
      type: 'INCREMENT',
      data: { id }
    })
  }
}

export const filterAnecdotes = (toFilter) => {
  return {
    type: 'FILTERING',
    data: { toFilter }
  }

}

const generateId = () =>
  Number((Math.random() * 1000000).toFixed(0))

export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(
      {
        type: 'NEW_ANECDOTE',
        data: {
          content,
          votes: 0,
          id: generateId()
        }
      })
  }
}

export default reducerAnecdote