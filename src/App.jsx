import { useState } from 'react'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Home from './pages/Home';
import RestaurentDetail from './pages/RestaurentDetail';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/RestaurentDetail/:id' element={<RestaurentDetail />} />

      </Routes>

    </>
  )
}

export default App
