import React from 'react'
import Title from './Title'
import Score from './Score'

const Section1 = ({score}) => {
  return (
    <div className="section-1">
        <Title />
        <Score score={score}/>
    </div>
  )
}

export default Section1