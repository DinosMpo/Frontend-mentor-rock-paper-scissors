"use client"

import React, { useState } from 'react'
import Image from 'next/image'

const ComputerChoice = ({ choice }) => {
    const [showChoice, setShowChoice] = useState(false);
    setTimeout(() => {
        console.log('eee');
        setShowChoice(true);
    }, 2000);

    return showChoice === false ? (
        <div className='empty-computer-choice'></div>
    )
    :
    (
        <div className='final-choice inner-circle'>
            <div className={`final-outer-circle final-${choice}-choice`}>
                <Image src={`/icon-${choice}.svg`} alt={choice} width="119" height="129"/>
            </div>
        </div>
    )
}

export default ComputerChoice