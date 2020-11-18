import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
  //console.log('notification, text.')
  const notification = useSelector(stateText => stateText.statenotif)
  //console.log('notificationX:',notification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  if (notification === '') {
    return null
  } else {
    return(
      <div style={style}>
        {notification}
      </div>)
  }
}

export default Notification