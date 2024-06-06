
export default function BT2() {

    let general:number[] = [];

    function caculation(a:number, b:number):void{
        let sum = a + b;
        let subtraction = a-b;
        let multiplication = a*b;
        let division = a/b;

        general.push(sum,subtraction,multiplication,division)
    }

    caculation(10,10)
  return (
    <>
    <h4>Danh sách kết quả</h4>
    <ul>
        {general.map((item)=>{
            return <li>{item}</li>
        })}
    </ul>
    </>
  )
}
