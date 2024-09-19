import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import StoreContextProvider from './context/StoreContext.jsx'

createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>              {/* This wrap tag is use for the Routing. */}
    <StoreContextProvider>     {/* This wrap tag is use for the StoreContext.jsx file which access anywhere. */}
      <App />
    </StoreContextProvider>  
  </BrowserRouter>
   

)
