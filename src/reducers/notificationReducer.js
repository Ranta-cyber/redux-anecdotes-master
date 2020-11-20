//import Notification from './../components/Notification'

const reducerNotif = (stateNotif = '', action) => {
  switch (action.type) {

    case 'SHOW_NEW_ADD': {
      
      return action.data.text
      }
    
      case 'HIDE_NOTIF': {

        return ""
      }

    case 'SHOW_NEW_VOTE': {
      //console.log('NEW_VOTE, action.data:', action.data)
      return action.data.text
    }

    default: return stateNotif
  }
}

export const showNotificationAdd = (text, time) => {
  return async dispatch => {
     await dispatch(
    {type: 'SHOW_NEW_ADD',
    data: {text} }
    )

    setTimeout( () => {dispatch(
      {type: 'HIDE_NOTIF',
      data: '' }
      ) }, (time * 1000))
  }
}

export const showNotificationVote = (text, time) => {
  return async dispatch => {
     await dispatch(
    {type: 'SHOW_NEW_VOTE',
    data: {text} }
    )

    setTimeout( () => {dispatch(
      {type: 'HIDE_NOTIF',
      data: '' }
      ) }, (time * 1000))
  }
}

export default reducerNotif
