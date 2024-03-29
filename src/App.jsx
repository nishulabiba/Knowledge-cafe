import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LastComponent from './Components/LastComponent/LastComponent'

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Blogs ></Blogs>
      <LastComponent></LastComponent>
    </div>
  )
}

export default App
