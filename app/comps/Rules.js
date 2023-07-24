import React, {useState} from 'react'

const Rules = ({showRules}) => {
  return (
    <div className='rules' onClick={() => showRules()}>RULES</div>
  )
}

export default Rules