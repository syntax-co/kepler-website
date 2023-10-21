import '@/styles/globals.css'
import Navbar from './components/navbar'
import { useState } from 'react'
import Demo from './components/KeplerDemo';




export default function App({ Component, pageProps }) {

  const [openDemo,setOpenDemo] = useState(false);

  return (
    <div className='w-screen h-screen relative overflow-hidden'>

      <Navbar 
      openDemo={openDemo}
      setOpenDemo={setOpenDemo}
      />
      
      <Demo 
      openDemo={openDemo} 
      setOpenDemo={setOpenDemo} 
      />

      <div className='component-holder'>
        <Component {...pageProps} />
      </div>
    </div>
  ) 
  
}
