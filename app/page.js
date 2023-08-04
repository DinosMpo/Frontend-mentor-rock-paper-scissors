"use client"

import { useState } from 'react'
import Section1 from './comps/Section1'
import Section3 from './comps/Section3'
import Choice from './comps/Choice'
import UserChoiceContainer from './comps/UserChoiceContainer'
import ComputerChoiceContainer from './comps/ComputerChoiceContainer'
import Result from './comps/Result'
import BackgroundImage from './comps/BackgroundImage'
import MobileResult from './comps/MobileResult'

let score = 0;
if(typeof window !== 'undefined') {
  const from_localStorage = window.localStorage.getItem('score');
  if(from_localStorage === undefined || from_localStorage === null) {
    score = 0;
  }
  `${from_localStorage}` ? score = parseInt(from_localStorage) : score = 0
}
let result = "";
let computerChoice = '';

export default function Home() {
  const [choice, setChoice] = useState("");
  const listOfChoices = ['paper', 'rock', 'scissors'];

  //rules are
  //paper wins rock and lose from scissors 
  //rock wins scissors and lose from paper 
  //scissors wins paper and lose from rock
  const checkResult = () => {
    if(choice === 'paper') {
      console.log('it works');
      if(computerChoice ==='rock') {
        result = 'YOU WIN';
        score++;
      }else if(computerChoice === 'scissors') {
        result = 'YOU LOSE';
        score--;
      }else{
        result = 'DRAW';
      }
    }else if(choice === 'rock') {
      if(computerChoice ==='scissors') {
        result = 'YOU WIN';
        score++;
      }else if(computerChoice === 'paper') {
        result = 'YOU LOSE';
        score--;
      }else{
        result = 'DRAW';
      }
    }else if(choice === 'scissors') {
      if(computerChoice ==='paper') {
        result = 'YOU WIN';
        score++;
      }else if(computerChoice === 'rock') {
        result = 'YOU LOSE';
        score--;
      }else{
        result = 'DRAW';
      }
    }
    localStorage.setItem('score', score);
  }

  const randomComputerChoice = () => {
    computerChoice = listOfChoices[Math.floor((Math.random() * listOfChoices.length))];
  }

  if(choice != '') {
    randomComputerChoice();
    checkResult();
  }

  return choice === "" ? (
    <main className="wrapper">
      <Section1 score={score}/>
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

      <Section3/>
      
    </main>
  )
  :
  (
    <main className="wrapper">
      <Section1 score={score}/>
      <div className='choices-container'>
        
        <UserChoiceContainer choice={ choice } result={ result }/>

        <Result result={result} setChoice={setChoice}/>

        <ComputerChoiceContainer choice={ computerChoice } result={ result }/>

      </div>
      <MobileResult result={result} setChoice={setChoice}/>

      <Section3/>
    </main>
  )
}
