import Score from './comps/score'
import Title from './comps/title'
import Choice from './comps/Choice'
import Rules from './comps/Rules'

export default function Home() {
  return (
    <main className="wrapper">
      <div className="section-1">
        <Title />
        <Score />
      </div>

      <div className='section-2'>
        <div className='two-choice-container'>
          <Choice className="paper-choice" choice="paper"/>
          <Choice className="scissors-choice" choice="scissors"/>
        </div>
        
        <div className='one-choice'>
          <Choice className="rock-choice" choice="rock"/>
        </div>
        
      </div>

      <div className='section-3'>
        <Rules />
      </div>
    </main>
  )
}
