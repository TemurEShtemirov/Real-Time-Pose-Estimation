import React, { useRef } from 'react'
import './App.css'
import * as tf from '@tensorflow/tfjs'
import * as posenet from '@tensorflow-models/posenet'
import Webcam from 'react-webcam'

export default function App() {

  const webcamRef = useRef(null)
  const canvasRef = useRef(null)

  // Load posenet 
  const runPosenet = async () => {
    const net = await posenet.load({
      inputResolution: { width: 640, height: 480 }, scale: 0.5
    })
    // 
    setInterval(()=>{

    },10)
  }

  return (
    <>
      <div className="App">
        <header className="App-header">
          <Webcam ref={webcamRef} style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 8,
            width: 640,
            height: 480,
          }} />
          <canvas ref={canvasRef} style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }} />
        </header>
      </div>
    </>
  )
}
