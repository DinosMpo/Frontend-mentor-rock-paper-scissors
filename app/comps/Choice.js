import React from 'react'
import Image from 'next/image'

const Choice = ({ choice }) => {
  return (
    <div className="choice inner-circle">
        <div className={`outer-circle ${choice}-choice`}>
            <Image src={`/icon-${choice}.svg`} width="49" height="59"/>
        </div>
    </div>
  )
}

export default Choice