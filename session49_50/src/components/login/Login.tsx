import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function Login() {
  // hứng
  const location = useLocation();
  console.log(location);
  
  return (
    <div>
        <label htmlFor="">email</label>
        <input type="text" name="" id=""/>
        <label htmlFor="">pass</label>
        <input type="text" name="" id="" />
        <button>Login</button>
    </div>
  )
}
