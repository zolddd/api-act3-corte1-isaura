import React from 'react'
import { Link } from 'react-router-dom'
import moduleStyle from "../assets/style/form.module.css";

export default function Home() {
  return (
   <>
   <h1>Home</h1>
   <Link to="/register" className={moduleStyle.linkHome}>Registrarse</Link>
   <Link to="/login" className={moduleStyle.linkHome}>Login</Link>
   <Link to="/alta" className={moduleStyle.linkHome}>Alta camion</Link>

   </> 
  

  )
}
