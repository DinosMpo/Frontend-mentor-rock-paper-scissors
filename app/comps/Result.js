import React, {useState} from 'react'
import styles from '../Result.module.css';

const Result = ({result, setChoice}) => {
    const [showResult, setShowResult] = useState(false);
    setTimeout(() => {
        setShowResult(true);
    }, 2000);
    return showResult === false ?(
        <div></div>
    )
    :
    (
        <div className={styles['result-container']}>
            <div>
                <div className={styles.result}>{result}</div>
                <div className={styles['play-again']} onClick={() => setChoice('')}>PLAY AGAIN</div>
            </div>
        </div>
    )
}

export default Result