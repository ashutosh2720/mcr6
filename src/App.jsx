import { useState } from 'react'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Home from './pages/Home';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
    </>
  )
}

export default App
