
export default function Functional() {
  
    let age: number = 20;
    let fullName:string = "minh thu"
    let myArr:string[] = ["hoa","hong"]

    type obj = {
        name:string
        age:number
    }

    let newStident:obj = {
        name:"phuong",
        age:25
    }
  return (
    <>
        Funtion
        <p>hello {fullName} age: {age}</p>
        <ul>
            {myArr.map((item)=>{
                return <li>{item}</li>
            })}
        </ul>

        <p>{JSON.stringify(newStident)}</p>
    </>
  )
}
