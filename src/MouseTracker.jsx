import React, { useEffect, useState } from 'react';
import "./app.css";

const MouseTracker = () => {
  const [mousePosition, setMousePosition] = useState([0, 0]);

  useEffect(() => {
  const handleMouseMove = (e) => {
    setMousePosition([e.movementX, e.movementY]);
    console.log(e)
  };

  window.addEventListener("mousemove", handleMouseMove);
  console.log("added")

  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
    console.log("removed")
  };
}, []); // important: run once



  return (
    <div>
      <h1>Mouse Pointer</h1>
      <p>X: {mousePosition[0]}</p>
      <p>Y: {mousePosition[1]}</p>
    </div>
  )
}

export default MouseTracker