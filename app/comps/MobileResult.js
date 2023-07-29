import React, {useState} from 'react'

const MobileResult = ({result, setChoice}) => {
    const [showResult, setShowResult] = useState(false);
    setTimeout(() => {
        setShowResult(true);
    }, 2000);
    return showResult === false ?(
        <div></div>
    )
    :
    (
        <div className={'mobile-result-container'}>
            <div>
                <div className={'mobile-result'}>{result}</div>
                <div className={'mobile-play-again'} onClick={() => setChoice('')}>PLAY AGAIN</div>
            </div>
        </div>
    )
}

export default MobileResult