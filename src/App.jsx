import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ColorButton from './ColorButton'

function App() {
  const [color, setColor] = useState('white')
  function resetColor(){
    setColor('white')
  }
  
  return (
  <div className='w-full h-screen duration-200 ' style={{backgroundColor: color}}>
      <h1 className='text-center justify-center text-5xl font-bold'>COLOR CHANGER WITH TAILWIND</h1>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-re px-3 py-2 rounded-3xl'>
        <button onClick={()=>setColor('red')}
        className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{backgroundColor:'red'}}>Red</button>
        <button onClick={()=>setColor('blue')}
        className='outline-none px-4 py-1 rounded-full shadow-lg text-black'style={{backgroundColor:'blue'}}>Blue</button>
        <button onClick={()=>setColor('yellow')}
        className='outline-none px-4 py-1 rounded-full shadow-lg text-black'style={{backgroundColor:'yellow'}}>Yellow</button>
        <button onClick={()=>setColor('purple')}
        className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{backgroundColor:'purple'}}>Purple</button>
        <button onClick={()=>setColor('orange')}
        className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{backgroundColor:'orange'}}>Orange</button>
        <button onClick={()=>setColor('green')}
        className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{backgroundColor:'green'}}>Green</button>
        <button onClick={()=>setColor('pink')}
        className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{backgroundColor:'pink'}}>Pink</button>
        <button onClick={()=>setColor('cyan')}
        className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{backgroundColor:'cyan'}}>Cyan</button>
        <button onClick={resetColor}
        className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{backgroundColor:'white'}}>reset</button>
        </div>
      </div>
      

  </div>
      
   
  )
}

export default App
