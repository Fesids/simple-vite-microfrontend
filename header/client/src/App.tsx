import { useContext, useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Header} from './components/Header'




function App() {
  
  return(
   <div className='app'>
     <Header></Header>
   </div>
  )

  
}

export default App
