import React, {useState} from 'react'
import ActiveRules from './ActiveRules'
import Rules from './Rules'

const Section3 = () => {
  const [activeRules, setActiveRules] = useState(false);

  const showRules = () => {
    if(activeRules) {
      setActiveRules(false);
    }else {
      setActiveRules(true);
    }
  }

  return activeRules ? (
    <>
      <ActiveRules showRules={showRules}/>
      <div className='section-3'>
          <Rules showRules={showRules}/>
      </div>
    </>
    )
  :
  (
    <div className='section-3'>
        <Rules showRules={showRules}/>
    </div>
  )
}

export default Section3