import { useState } from 'react'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <AccessAlarmIcon />

    </>
  )
}

export default App
