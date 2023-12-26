import { useContext, useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Header} from "remoteApp/Header";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { Layout } from './layout';



const Teste = () =>{
  return(
    <div>Teste</div>
  )
}
const routes = createBrowserRouter(
  [
      {
          path: "",
          element: <Layout/>,
          children: [
              {
                  path:"/teste",
                  element: <Teste/>
              },

              {
                path: "/header",
                element: <Header/>
              }
          ]
      }
  ]
)


function App() {
  
  return(
  
    <div className='app'>
      <RouterProvider router={routes}/>
    </div>
  
  )

  
}

export default App
