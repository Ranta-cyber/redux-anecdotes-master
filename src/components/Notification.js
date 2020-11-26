import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { connect } from 'react-redux' 
//import {reducerCreatorTimerClear} from './../reducers/reducerTimer'
//import {reducerCreatorTimerSetup} from './../reducers/reducerTimer'

const Notification = () => {
  
  //console.log('notification, text.')
  const notification = 
  useSelector(stateText => stateText.statenotif)
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

const mapStateToProps = (state) => {
  return {stateTimer: state.stateTimer}
}

export default connect(
  mapStateToProps
) (Notification)