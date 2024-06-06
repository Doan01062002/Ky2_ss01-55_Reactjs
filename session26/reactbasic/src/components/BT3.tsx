
export default function BT3() {
    interface User{
        name:string
        gental:string
        birth:string
        email:string
        address:string
    }

    let user:User = {
        name:"Nguyễn Văn A",
        gental:"Nam",
        birth:"06/03/2024",
        email:"nva@gamil.com",
        address:"Thanh Xuân, Hà Nội"
    }
  return (
    <>
    <h4>Thông tin cá nhân</h4>
    <ul>
        <li>Họ và tên: {user.name}</li>
        <li>Giới tính: {user.gental}</li>
        <li>Ngày sinh: {user.birth}</li>
        <li>Email: {user.email}</li>
        <li>Địa chỉ: {user.address}</li>
    </ul>
    </>
  )
}
