import React, { useEffect, useState } from 'react'
import "./index.css"

export default function BackToTop() {
    const [showButton,setShowButton] = useState<boolean>(false)

    const handleScroll = ()=>{
        if(window.scrollY > 200){
                setShowButton(true)
            }else{
                setShowButton(false)
            }
    }

    useEffect(()=>{
        window.addEventListener("scroll", handleScroll)
        //trong useEffect khi đăng ký bất kì sự kiện nào từ client bắt buộc chúng ta phải gỡ nó đi khi component amount
        //Cleaup funtion
        return ()=>{
            window.removeEventListener("scroll",handleScroll)
        }
    },[])

    const handleBackTop = ()=>{
        //quay lại đầu trang
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
    
  return (
    <div>
    {showButton && <button onClick={handleBackTop} className='btn-back-top'>Back</button>}
    </div>
  )
}
