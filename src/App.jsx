import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './Greeting'
import Counter from './Counter'
import Form from './Form'

function App() {
  const [count, setCount] = useState(0)
  const students = [
    {name: "maddie", score: 80},
    {name: "you", score: 50},
    {name: "your name", score: 85},
  ]


  return (
    <>

        <Greeting name="maddie" />
        <Greeting name="you"/>
        <Greeting name="your name" />
        <Greeting />
        <Greeting />
        <Greeting />
       <Counter></Counter>
       <Form></Form>
        {/* {students.map((student, index) => (
          <Welcome key={index} name={student.name} />
        ))} */}

    </>
  )
}

export default App
