import React from 'react'
import Image from 'next/image'

const ActiveMobileRules = ({showRules}) => {
  return (
    <div className='active-mobile-rules-wrapper'>
        <div className='active-rules-title'>RULES</div>
        <Image className='active-mobile-rules-img' src='/image-rules.svg' width={304} height={270}/>
        <div className='active-mobile-rules-close-wrapper'>
            <div className='active-mobile-rules-close' onClick={() => showRules()}></div>
        </div>
    </div>
  )
}

export default ActiveMobileRules