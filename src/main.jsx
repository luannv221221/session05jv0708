import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import App2 from './App2.jsx'
import Todo from './Todo.jsx'

createRoot(document.getElementById('root')).render(
  <>
    {/* <App2 /> */}
    <Todo />
  </>,
)
