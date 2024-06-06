import React, { memo } from 'react'
interface Props{
  count:number
}

export default function Memo({count}: Props) {

  console.log("memo");
  
  return (
    <div>Memo
      {/*
          Memo 
          + HOC: higher order component : hàm bậc cao trong javascript
          + sẽ đi kiểm tra xem có props nào thay đổi hay không
          + nếu props(giá trị truyền vào từ cha sang con) thay đổi component sẽ render
          + nếu props không thay đổi thì không render
          + chỉ cần 1 props thay đổi thì component được render theo chứ ko phải tất cả props thay đổi thì mới render
       */}
    </div>
  )
}

// export default memo(Memo)