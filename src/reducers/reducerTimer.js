const reducerTimer = (state = '', action) => {
  switch (action.type) {

    case 'CLEAR': {
      return null
    }

    case 'SETUP': {
      return action.data.showTime
    }

    default: return state
  }
}

export const reducerCreatorTimerClear = (showTime) => {
  return {
    type: 'CLEAR',
    data: '' 
  }
}

export const reducerCreatorTimerSetup = (showTime) => {
  return {
    type: 'SETUP',
    data: { showTime }
  }
}

export default reducerTimer