
export default function BT1() {
  let course:string[] = ["HTML", "CSS", "Javascript", "ReactJS"]
  let count = 1;
  return (
    <>
    <h1>Danh sách khóa học</h1>
    <ul>
      {course.map((item)=>{
        return <li>{count++}. {item}</li>
      })}
    </ul>
    </>
  )
}
