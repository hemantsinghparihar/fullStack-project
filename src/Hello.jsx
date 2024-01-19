import React from 'react'
// Imagine you have a component called Hello, and you want it to say "Hello" to different people. Instead of hard-coding names into the component, you can pass the names as props.
function Hello(props) {
  return (
    <div>
      <p>
        Greetings {props.name} sir this is day {props.day}
      </p>
    </div>
  )
}

export default Hello
