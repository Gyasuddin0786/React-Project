/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef, useCallback } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (char) str += "!@#$%&*-_=+[]{}`~";

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length); 
      pass += str.charAt(char);
    }
    setPassword(pass);
  };

  const passRef = useRef(null)
  const copyPasswordToClipboard = useCallback(() =>{
    passRef.current?.select();
    passRef.current?.setSelectionRange(0,100);
    window.navigator.clipboard.writeText(password)
    
  },[password])
  useEffect(() => {
    generatePassword(); 
  }, [length, numberAllowed, char]);
  return (
    <div className=" main-container w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-10 text-white bg-gray-600">
      <h2 className="text-center mb-4">Password Generator</h2>
      <div className="flex shadow rounded-lg overflow-hidden">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3 bg-white text-black text-2xl"
          placeholder="Password"
          readOnly
        />
        <button id="btn"
          className="outline-none rounded-md text-white bg-blue-500 px-3 py-0.5 shrink-0" ref={passRef}
          onClick={copyPasswordToClipboard}
        >
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2 mt-4">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            className="cursor-pointer"
            min={6}
            max={100}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))} // Ensure value is a number
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={numberAllowed}
            id="numberInput"
            className="cursor-pointer"
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={char}
            id="charInput"
            className="cursor-pointer"
            onChange={() => setChar((prev) => !prev)}
          />
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </div>
  );
}
export default App;
