import { useState } from "react"
import PasswordGenerate from "./PasswordGenerate"

function App() {
  const [color,setColor] = useState('olive')

  return (
    <div className="w-full h-screen duration-200 pt-6" style={{backgroundColor: color}}>
      <PasswordGenerate />
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={() => setColor('red')} className="outline-none px-4 py-1 rounded-full text-white shadow-large" style={{backgroundColor : 'red'}}>Red</button>
          <button onClick={() => setColor('green')} className="outline-none px-4 py-1 rounded-full text-white shadow-large" style={{backgroundColor : 'green'}}>Green</button>
          <button onClick={() => setColor('orange')} className="outline-none px-4 py-1 rounded-full text-white shadow-large" style={{backgroundColor : 'orange'}}>Orange</button>
          <button onClick={() => setColor('blue')} className="outline-none px-4 py-1 rounded-full text-white shadow-large" style={{backgroundColor : 'blue'}}>Blue</button>
          <button onClick={() => setColor('pink')} className="outline-none px-4 py-1 rounded-full text-white shadow-large" style={{backgroundColor : 'pink'}}>Pink</button>
          <button onClick={() => setColor('black')} className="outline-none px-4 py-1 rounded-full text-white shadow-large" style={{backgroundColor : 'black'}}>Black</button>
        </div>
      </div>
    </div>
  )
}

export default App

// if we write onClick in btn and give a function refrence but here is problem we can't give parameters to funtion
// if we do then function runs and onClick get returned value of funtion , but as we know onClick accepts refrence of funtion not return value
// so just write insite it
