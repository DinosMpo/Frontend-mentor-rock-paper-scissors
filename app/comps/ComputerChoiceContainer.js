import React from 'react'
import ComputerChoice from './ComputerChoice'

const ComputerChoiceContainer = ({choice, result}) => {
  return (
    <div className='choice-container'>
        <div className='desktop-computer-choice'>
          <div className='computer-choice-title'>THE HOUSE PICKED</div>
          <div className='choice-wrapper'>
            <ComputerChoice choice={ choice } result={ result }/>
          </div>
        </div>
        
        <div className="mobile-computer-choice">
          <div className='choice-wrapper'>
            <ComputerChoice choice={ choice } result={ result }/>
          </div>
          <div className='computer-choice-title'>THE HOUSE PICKED</div>
      </div>
    </div>
  )
}

export default ComputerChoiceContainer