import React, {useState} from 'react'
import Image from 'next/image'
import WinnerEffect from './WinnerEffect'

const FinalChoice = ({ choice, result }) => {
  let [youWοn, setYouWon] = useState(false);
  if(result === 'YOU WIN') {
    setTimeout(() => setYouWon(true), 2000)
  }

  return youWοn === true ?(
    <div className='choice-wrapper'>
      <WinnerEffect />
      <div className="final-choice inner-circle">
          <div className={`final-outer-circle final-${choice}-choice`}>
              <Image src={`/icon-${choice}.svg`} alt={choice} width="119" height="129"/>
          </div>
      </div>
    </div>
  )
  :
  (
    <div className='choice-wrapper'>
      <div className="final-choice inner-circle">
          <div className={`final-outer-circle final-${choice}-choice`}>
              <Image src={`/icon-${choice}.svg`} alt={choice} width="119" height="129"/>
          </div>
      </div>
    </div>
  )
}

export default FinalChoice