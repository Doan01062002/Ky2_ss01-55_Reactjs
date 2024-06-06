import React from 'react'

type JobType = {
    id:string
    name:string
    status:boolean
}

type PropType = {
    job:JobType
    handleDelete: (id:string) => void
    handleChecked: (id:string) => void
}

export default function JobItem({job, handleDelete, handleChecked}: PropType) {
  return (
    <>
        <li>
            <input onChange={()=> handleChecked(job.id)} checked = {job.status} type="checkbox" id="task1" />
            <label htmlFor="task1">
                {job.status ? (<s>{job.name}</s>): (<span>{job.name}</span>)}
            </label>
            <button onClick={()=> handleDelete(job.id)}>Delete</button>
        </li>
    </>
  )
}
