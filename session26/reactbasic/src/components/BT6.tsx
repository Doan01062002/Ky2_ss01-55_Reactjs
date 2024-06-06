
export default function BT6() {
    const user = {
        firstName:"Nguyễn Văn",
        lastName:"Nam"
    }

    function formatName(user:any):any{
        return user.firstName + " "+ user.lastName
    }

  return (
    <div>Họ và tên: {formatName(user)}</div>
  )
}
