import React from 'react'
import Image from 'next/image'
import { useState } from 'react'

const Choice = ({ choice , setChoice, randomComputerChoice }) => {
  // const []

  return (
    <div onClick={() => {setChoice(choice); randomComputerChoice();}} className="choice inner-circle">
        <div className={`outer-circle ${choice}-choice`}>
            <Image src={`/icon-${choice}.svg`} alt={choice} width="49" height="59"/>
        </div>
    </div>
  )
}

export default Choice