import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import TodoApp from '@/TodoApp';
import './index.css'

const domContainer = document.getElementById('root')
const root = ReactDOM.createRoot(domContainer)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TodoApp />
    </BrowserRouter>
  </React.StrictMode>
)
