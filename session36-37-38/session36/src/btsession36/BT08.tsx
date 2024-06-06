import React, { useEffect, useState } from 'react'

export default function BT08() {
    const [season,setSeason] = useState<string>("")
    let month = new Date().getMonth() +1;
    useEffect(()=>{
        
        let currentSeason = "";

        if (month >= 1 && month <= 3) {
            currentSeason = 'Mùa Xuân';
          } else if (month >= 4 && month <= 6) {
            currentSeason = 'Mùa Hạ';
          } else if (month >= 7 && month <= 9) {
            currentSeason = 'Mùa Thu';
          } else if (month >= 10 && month <= 12) {
            currentSeason = 'Mùa Đông';
          }
        setSeason(currentSeason)
    },[])


  return (
    <div>BT08:
        <p>Bây giờ là tháng:{month} </p>
        <p>Mùa hiện tại: {season}</p>
    </div>
  )
}
