import React from 'react'
import FinalChoice from './FinalChoice'

const ChoiceContainer = ({choice, result}) => {
  return (
    <div className='choice-container'>
        <div className='your-choice-title'>YOU PICKED</div>
        <FinalChoice choice={ choice } result={ result }/>
    </div>
  )
}

export default ChoiceContainer