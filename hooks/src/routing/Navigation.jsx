import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
// import LearnUseState from '../pages/LearnUseState'
import PracUseState from '../pages/PracUseState'
import Login from '../pages/login'
// import LearnUseEffect from '../pages/LearnUseEffect'
import PracUseEffect from '../pages/PracUseEffect'
import Signup from '../pages/Signup'
import LearnUseMemo from '../pages/LearnUseMemo'
import LearnUseCallback from '../pages/LearnUseCallback'
import LearnUseRef from '../pages/LearnUseRef'
import LearnUseReducer from '../pages/LearnUseReducer'
import TicTacToe from '../pages/TicTacToe'
import Toggle from '../pages/Toggle'


export default function Navigation() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      {/* <Route path='/useState' element={<LearnUseState/>}/> */}
      <Route path='/useState' element={<PracUseState/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      {/* <Route path='/useEffect' element={<LearnUseEffect/>}/> */}  
      <Route path='/useEffect' element={<PracUseEffect/>}/>
      <Route path='/useMemo' element={<LearnUseMemo/>}/>
      <Route path='/useCallback' element={<LearnUseCallback/>}/>
      <Route path='/useRef' element={<LearnUseRef/>}/>
      <Route path='/useReducer' element={<LearnUseReducer/>}/>
      <Route path='/game' element={<TicTacToe/>}/>
      <Route path='/theme' element={<Toggle/>}/>
    </Routes>
  )
}
