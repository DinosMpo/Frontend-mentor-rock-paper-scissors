import React, {useState,useEffect} from 'react'

const Score = ({score}) => {
  const [newScore, setNewScore] = useState(0);
  useEffect(()=> {
    setNewScore(score);
  }, []);

  if(score != newScore) {
    setTimeout(() => {
      setNewScore(score);
    }, 2000);
    
  }

  return (
    <div className="score-container">
        <div className="score-title">SCORE</div>
        <div className="score">{newScore}</div>
    </div>
  )
}

export default Score