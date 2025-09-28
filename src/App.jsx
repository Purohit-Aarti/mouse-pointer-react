import React, { useState } from 'react'
import "./app.css"

const App = () => {
  const [mousePosition, setMousePosition] = useState([0, 0]);

  const handleMouseMove = (e) => {
    setMousePosition(
      [mousePosition[0] = e.movementX, mousePosition[1] = e.movementY]
    )
    console.log(mousePosition)
  }
  return (
    <div onMouseMove={handleMouseMove}>
      <h1>Mouse Pointer</h1>
      <p>X: {mousePosition[0]}</p>
      <p>Y: {mousePosition[1]}</p>
    </div>
  )
}

export default App
