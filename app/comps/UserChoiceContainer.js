import React from 'react'
import FinalChoice from './FinalChoice'

const UserChoiceContainer = ({choice, result}) => {
  return (
    <div className='choice-container'>
      <div className="desktop-user-choice">
        <div className='your-choice-title'>YOU PICKED</div>
        <FinalChoice choice={ choice } result={ result }/>
      </div>

      <div className="mobile-user-choice">
        <FinalChoice choice={ choice } result={ result }/>
        <div className='your-choice-title'>YOU PICKED</div>
      </div>
    </div>
  )
}

export default UserChoiceContainer