import React from 'react'

import Header from './Header'
import Contents from './Contents'
import Total from './Total'
function App() {
  // const course = 'Half Stack application development'
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}/>

      <Contents part1={part1.name} exercises1={part1.exercises}/>
      {/* <Contents part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2}  part3={part3} exercises3={exercises3} />
      
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} /> */}

       
    </div>
  )
  
  
  //import Hello from './Hello'
  
  // const now=new Date();
  // const a=10;
  // const b=20;

  // console.log(now,a+b);
  // return (
  //   <div>
  //   <p>Hello world,it is {now.toString()}</p>
  //   <p>
  //     {a} plus {b} is {a+b}
  //   </p>
  //   <Hello name='hemant' day={6+1}/>
  // </div>
  // )
}

export default App
