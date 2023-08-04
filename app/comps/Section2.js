import React from 'react'
import BackgroundImage from './BackgroundImage'
import Choice from './Choice'


const Section2 = ({setChoice}) => {
  return (
    <div className='section-2'>
        <BackgroundImage />
        <div className='two-choice-container'>
          <Choice className="paper-choice" choice="paper" setChoice={setChoice}/>
          <Choice className="scissors-choice" choice="scissors" setChoice={setChoice}/>
        </div>

        <div className='one-choice'>
          <Choice className="rock-choice" choice="rock" setChoice={setChoice}/>
        </div>

    </div>
  )
}

export default Section2