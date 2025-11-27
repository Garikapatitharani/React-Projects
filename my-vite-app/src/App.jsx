import React from 'react'
import './App.css';
import Header, { Contactus, Login, MobNum } from './components/SubComp';
import { Footer } from './components/Footer';


function App(){
  const activity = 'Electronics and Communication Engineering';
 return(
   <>
   <Header/>
   <h1>Tharani Garikapati</h1>
   <h2>Electronics and Communication Engineering</h2>
   <Login/>
   <MobNum/>
   <Contactus/>
   <Footer/>
   </>
 )
}
export default App