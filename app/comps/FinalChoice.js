import React from 'react'
import Image from 'next/image'

const FinalChoice = ({ choice }) => {
  return (
    <div className="final-choice inner-circle">
        <div className={`final-outer-circle final-${choice}-choice`}>
            <Image src={`/icon-${choice}.svg`} alt={choice} width="119" height="129"/>
        </div>
    </div>
  )
}

export default FinalChoice