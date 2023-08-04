import React, { useState } from 'react'
import Image from 'next/image'
import WinnerEffect from './WinnerEffect'

const ComputerChoice = ({ choice, result }) => {
    const [showChoice, setShowChoice] = useState(false);
    setTimeout(() => {
        setShowChoice(true);
    }, 2000);
    let showResult;

    const evaluateResult = () => {
        if(showChoice === false) {
            return <div className='empty-computer-choice'></div>
        }else if(showChoice === true) {
            if(result === 'YOU WIN' || result === 'DRAW') {
                return (
                    <div className='final-choice inner-circle'>
                        <div className={`final-outer-circle final-${choice}-choice`}>
                            <Image src={`./../icon-${choice}.svg`} alt={choice} width="49" height="59"/>
                        </div>
                    </div>)
            }else if(result === 'YOU LOSE') {
                return (
                    <div className='final-choice inner-circle'>
                        <WinnerEffect/>
                        <div className={`final-outer-circle final-${choice}-choice`}>
                            <Image src={`./../icon-${choice}.svg`} alt={choice} width="49" height="59"/>
                        </div>
                    </div>)
            }
        }
    }   
    
    return evaluateResult()
}

export default ComputerChoice