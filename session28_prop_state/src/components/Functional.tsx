interface Prop{
    name:string
    students:string[]
}

export default function Functional(props:Prop) {

    console.log(props);
    const {name}=props
    const {students} = props
    
  return (
    <div>Functional
        <p>Xin chào {name}</p>
        <ul>
            {students.map((item,index)=>{return <li key={index}>{item}</li>})}
        </ul>
    </div>
  )
}
