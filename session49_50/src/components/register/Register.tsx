import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Register() {
    let navigate = useNavigate();
    const register = ()=>{
      let user = {
        email:valueEmail,
        pass:valuePass,
      }
        navigate("/login", {state:user})
    }

    const [valueEmail,setvalueEmail] = useState<string>("")
    const [valuePass,setValuePass] = useState<string>("")

    //lấy giá trị trong input
    const handleChangeEmail = (e:React.ChangeEvent<HTMLInputElement>)=>{
      setvalueEmail(e.target.value);
      
    }

    const handleChangePass = (e:React.ChangeEvent<HTMLInputElement>)=>{
      setValuePass(e.target.value);
      
    }
  return (
    <div>
        <label htmlFor="">email</label>
        <input type="text" name="" id="" onChange={handleChangeEmail}/>
        <label htmlFor="">pass</label>
        <input type="text" name="" id="" onChange={handleChangePass}/>
        <button onClick={register}>Đăng ký</button>
    </div>
  )
}
