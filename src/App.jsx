import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import CssBaseline from "@mui/material/CssBaseLine";
import TodoList from './assets/TodoList';

function App() {

  return (
    <>
      <CssBaseline/>
      <h1>Todos</h1>
      <TodoList/>
    </>
  )
}

export default App
