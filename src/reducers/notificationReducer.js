//import Notification from './../components/Notification'

const reducerNotif = (stateNotif = '', action) => {
  switch (action.type) {

    case 'SHOW_NEW_ADD': {
      
      return action.data.text
      }

    case 'SHOW_NEW_VOTE': {
      //console.log('NEW_VOTE, action.data:', action.data)
      return action.data.text
    }

    default: return stateNotif
  }

}

export const showNotificationAdd = (text) => {
  return {
    type: 'SHOW_NEW_ADD',
    data: {text}
  }
}

export const showNotificationVote = (text) => {
  return {
    type: 'SHOW_NEW_VOTE',
    data: {text}
  }
}
export default reducerNotif
