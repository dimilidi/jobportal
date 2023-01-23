import React from 'react'
import ReactDOM from 'react-dom/client'
import axios from 'axios'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { SocketProvider } from './Hooks/useMessenger'

axios.defaults.baseURL = 'http://localhost:3001'
axios.defaults.withCredentials = true

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
    <SocketProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SocketProvider>
      
  // </React.StrictMode>
)
