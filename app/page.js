"use client"

import { useState } from 'react'
import Image from 'next/image'
import Section1 from './comps/Section1'
import Choice from './comps/Choice'
import Rules from './comps/Rules'
import FinalChoice from './comps/FinalChoice'
import ComputerChoice from './comps/ComputerChoice'



export default function Home() {
  const [choice, setChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const listOfChoices = ['paper', 'rock', 'scissors'];

  const randomComputerChoice = () => {
    // setComputerChoice('paper');
    setComputerChoice(listOfChoices[Math.floor((Math.random() * listOfChoices.length))]);
  }

  return choice === "" ? (
    <main className="wrapper">
      <Section1 />

      <div className='section-2'>
        <div className='two-choice-container'>
          <Choice className="paper-choice" choice="paper" setChoice={setChoice} randomComputerChoice={randomComputerChoice}/>
          <Choice className="scissors-choice" choice="scissors" setChoice={setChoice} randomComputerChoice={randomComputerChoice}/>
        </div>
        
        <div className='one-choice'>
          <Choice className="rock-choice" choice="rock" setChoice={setChoice} randomComputerChoice={randomComputerChoice}/>
        </div>
        
      </div>

      <div className='section-3'>
        <Rules />
      </div>
    </main>
  )
  :
  (
    <main className="wrapper">
      <Section1 />
      <div className='choices-container'>
        
        <div className='choice-container'>
          <div className='your-choice-title'>YOU PICKED</div>
          <div className='choice-wrapper'>
            <FinalChoice choice={ choice }/>
          </div>
        </div>

        <div className='choice-container'>
          <div className='computer-choice-title'>THE HOUSE PICKED</div>
          <div className='choice-wrapper'>
            <ComputerChoice choice={ computerChoice }/>
          </div>
            
        </div>

      </div>
    </main>
  )
}
