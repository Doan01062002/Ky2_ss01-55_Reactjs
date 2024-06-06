import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import JobItem from './JobItem';
import Job from '../btsession30/BT11/Job';

type JobType = {
    id:string
    name:string
    status:boolean
}

export default function TodoList() {

    const [valueInput,setValueInput] = useState<string>("")
    const [showError,setShowError] = useState<boolean>(false)
    const [listJob,setListJob] = useState<JobType[]>(()=>{
        const jobLocal = localStorage.getItem("jobs")

        //nếu có jobLocal thì thực hiện ép kiểu, nếu không sẽ tạo ra một mảng rỗng
        const jobs = jobLocal ? JSON.parse(jobLocal) : [];

        return jobs;
    })

    //region chứa danh sách các hàm của component
    /**
     * Hàm lấy giá trị trong ô input và validate dữ liệu đầu vào
     * @param e Thông tin chi tiết của sự kiện
     * NVD(13/05/2024)
     */
    const changeInputValue = (e:React.ChangeEvent<HTMLInputElement>):void =>{
        setValueInput(e.target.value)

        //showError
        if(e.target.value){
            setShowError(false)
        }else{
            setShowError(true)
        }
    };

    //saveData
    const saveData = (key:string, value:any)=>{
        //lưu dữ liệu lên local
        localStorage.setItem(key, JSON.stringify(value))
        
        //cập nhật State để component được re-render
        setListJob(value)
    }

    //Tạo đối tượng mới
    const handleCreateJob = ():void =>{
        //kiểm tra dữ liệu đầu vào
        if(valueInput){
            //Bước 1: Tọa đối tượng Job
            const job:JobType = {
                id:uuidv4(),
                name:valueInput,
                status:false
            }

            //Bước 2: push dữ liệu vào mảng (mảng này lấy dữ liệu từ localStorage)
            listJob.push(job)

            //Bước 3: Lưu trữ dữ liệu lên local
            saveData("jobs", listJob)

            //Bước 4: reset giá tri trong ô input
            setValueInput("")
        }else{
            setShowError(true)
        }
    }

    //Hàm xóa
    const handleDelete = (id:string) =>{
        //Lọc ra những công việc có id khác với id cần xóa
        const filterJob = listJob.filter((job: JobType)=> job.id !== id)

        //Lưu mảng mới lên local
        saveData("jobs", filterJob)
        
    }

    //Hàm check công việc
    const handleChecked = (id:string) =>{
        //cập nhật trạng thái công việc
        const updateJob: JobType[] = listJob.map((job: JobType)=>{
            //kiểm tra công việc cần update theo id
            if(job.id === id){
                return {...job, status: !job.status}
            }

            return job
        })

        //lưu dữ liệu lên local
        saveData("jobs", updateJob)
    }

    //Đếm số công việc hoàn thành
    const totalCountJobSuccess = ()=>{
        const filterJobSuccess = listJob.filter((job:JobType)=> job.status)

        return filterJobSuccess.length
    }

  return (
    <>
        <div className="todo-container">
        <h2>ToDo List</h2>
        <div className="input-container">
          <input value={valueInput} onChange={changeInputValue} type="text" id="taskInput" placeholder="Add new task..." />
          <button onClick={handleCreateJob} className="button">Add Task</button>
        </div>
        {
            showError && (<p style={{color:"red"}}>Tên công việc không được để trống</p>)
        }
        <ul id="taskList">
          {listJob.map((job:JobType)=>(
            <div key={job.id}>
                <JobItem job = {job} handleDelete = {handleDelete} handleChecked = {handleChecked}></JobItem>
            </div>
          ))}
        </ul>
        <p>
            Tasks completed: 
            {totalCountJobSuccess() === listJob.length ? <><span>Hoàn thành toàn bộ công việc</span></> : <><span id="completedTasks">{totalCountJobSuccess()}</span></>}
          
        </p>
      </div>
    </>
  )
}
