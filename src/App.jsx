import React, { useEffect, useState } from 'react'
import "./app.css"

const App = () => {
  const [mousePosition, setMousePosition] = useState([0, 0]);

  useEffect(() => {
    const handleMouseMove = (e) => {
    setMousePosition(
      [mousePosition[0] = e.movementX, mousePosition[1] = e.movementY]
    )
    console.log(mousePosition)
  }
  window.addEventListener('mousemove', (e) => {handleMouseMove(e)})
  });

  
  return (
    <div>
      <h1>Mouse Pointer</h1>
      <p>X: {mousePosition[0]}</p>
      <p>Y: {mousePosition[1]}</p>
    </div>
  )
}

export default App
