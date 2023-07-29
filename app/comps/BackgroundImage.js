import React from 'react'
import Image from 'next/image'

const BackgroundImage = () => {
  return (
    <div className='bg-img-container'>
        <Image className='bg-img' src='/bg-triangle.svg' width='313' height='278'/>
    </div>
  )
}

export default BackgroundImage