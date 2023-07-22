import React from 'react'
import styles from '../WinnerEffect.module.css'

const WinnerEffect = () => {
  return (
    <div className={styles['winner-effect-container']}>
      <div className={styles['winner-effect']}>
        <div className={styles['winner-effect-layer1']}></div>
        <div className={styles['winner-effect-layer2']}></div>
      </div>
    </div>
  )
}

export default WinnerEffect