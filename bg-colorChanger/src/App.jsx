import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive");
  const [textColor,settextColor] = useState("Black");
  return (
    <>
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}>
          <div className='text-3xl py-8'><h2 className='outline-none bg-yellow-600 rounded-lg  py-3'>Background Color Changer</h2></div>
        <div className="flex justify-center items-center h-screen text-3xl py-8 text-black">
          <h1 style={{color:textColor}} onMouseMove={()=> settextColor("white")}>Gyasuddin</h1></div>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-2 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl text-white">
          
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "red"}}
          >
            Red
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "yellow", color: "black" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("pink")}
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => setColor("white")}
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "white", color: "black" }}
          >
            White
          </button>
          <button
            onClick={() => setColor("orange")}
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>
          <button
            onClick={() => setColor("gray")}
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "gray" }}
          >
            Gray
          </button>
          <button
            onClick={() => setColor("tomato")}
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "tomato" }}
          >
            Tomato
          </button>
          <button
            onClick={() => setColor("lightblue")}
            className="outline-none px-4 py-1 rounded-full shadow-lg"
            style={{ backgroundColor: "lightblue" }}
          >
            Light Blue
          </button>
        </div>
      </div>
    </div>

    </>
  )
}

export default App
