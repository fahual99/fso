import { useState } from 'react'

const Button = ({onClick, text}) => {
  return (
    <>
    <button onClick={onClick}>{text}</button>
    </>
  )
}


const StatisticLine = ({text, value}) => {
  return (
    <>
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
    </>
  )
}

const Statistics = ({good, neutral, bad}) => {
  let all = good + neutral + bad
  let average = all === 0 ? 0 : (good - bad) / all
  let positive = all === 0 ? 0 : (good/all) * 100
  return (
    <>
    <h2>Statistics</h2>
    {all === 0 ? (
      <p>No feedback given</p>
    ) : (
      <>
      <table>
        <tbody>
          <StatisticLine text={"Good"} value={good}/>
          <StatisticLine text={"Neutral"} value={neutral}/>
          <StatisticLine text={"Bad"} value={bad}/>
          <StatisticLine text={"All"} value={all}/>
          <StatisticLine text={"Average"} value={average}/>
          <StatisticLine text={"Positive"} value={positive + "%"}/>
        </tbody>
        
      </table>
    </>
  )}
  </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2> Give feedback </h2>
      <Button onClick={() => setGood(good+1)} text={"good"}/>
      <Button onClick={() => setNeutral(neutral+1)} text={"neutral"}/>
      <Button onClick={() => setBad(bad+1)} text={"bad"}/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App