import React from 'react'
import Image from 'next/image'

const ActiveRules = ({showRules}) => {
  return (
    <div className='active-rules-wrapper'>
        <div className='active-rules'>
        <div className='active-rules-top'>
            <div className='active-rules-title'>RULES</div>
            <div className='active-rules-close' onClick={() => showRules()}></div>
        </div>
        <Image className="active-rules-img" src='/image-rules.svg' width={304} height={270}/>
        </div>
    </div>
  )
}

export default ActiveRules