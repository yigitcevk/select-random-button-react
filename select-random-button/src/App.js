import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import Buttons from './components/Buttons';




const App = () => {
  
  const canvas = useRef(null);

  function rand(items) {
    // "~~" for a closest "int"
    return items[Math.floor(Math.random()*items.length)];
  }

  useEffect(() => {
    if (canvas) {
      const ctx = canvas.current.getContext("2d");
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, 1024, 512);

      ctx.fillStyle = "red";
      ctx.fillRect(0,0,64,64);
      ctx.fill();

      ctx.fillStyle = "blue";
      ctx.fillRect(128,256,64,64);
      ctx.fill();

      ctx.fillStyle = "green";
      ctx.fillRect(512,128,64,64);
      ctx.fill();

      ctx.fillStyle = "yellow";
      ctx.fillRect(800,356,64,64);
      ctx.fill();

      ctx.font = "20px Comic Sans MS";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";


    }
  }, [canvas]);  
  


  return (
    <div id="canvas-wrap">
      <canvas id='myCanvas' ref={canvas} width={1024} height={512} />
      <div id="overlay">
        <Buttons/>
      </div>
    </div>
  );
};

export default App;
