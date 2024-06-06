// import Functional from "./components/Functional";
// import Class from "./components/Class";
// import Statefunctional from "./components/Statefunctional"
// import StateClass from "./components/StateClass";

import BT01 from "./btsession28/BT01";
import BT02 from "./btsession28/BT02";
import BT03 from "./btsession28/BT03";
import Parent_Comp from "./btsession28/BT04/Parent_Comp";
import Prop_Parent from "./btsession28/BT05/Prop_Parent";
import ParentComponent from "./btsession28/BT06/Bt06_parent";


export default function App() {
  // const fullName:string = "rikkei";
  // const students: string[]=["thu","minh"]
  // const age:number = 25
  // const number:number[] = [1,2,3,4,5]
  return (
    <div>App
      {
        /*
          1.props: dùng để truyền dữ liệu từ component cha sang component con
          2.state: dùng để quản lý dữ liệu bên trong component 
         */
      }

      {/* <Functional name = {fullName} students = {students}></Functional>
      <Class age = {age} number = {number}></Class>
      <Statefunctional></Statefunctional>
      <StateClass></StateClass> */}

      <BT01></BT01>
      <BT02></BT02>
      <BT03></BT03>
      <Parent_Comp></Parent_Comp>
      <Prop_Parent></Prop_Parent>
      <ParentComponent></ParentComponent>
    </div>
  )
}
