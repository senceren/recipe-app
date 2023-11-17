import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UserPrefencesProvider } from './context/UserPrefencesContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserPrefencesProvider>
    <App />
    </UserPrefencesProvider>
  </React.StrictMode>
)
