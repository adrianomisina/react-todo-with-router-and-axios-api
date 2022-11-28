import React from 'react'
import styles from './Task.module.css'
import {CgClose, CgInfo } from 'react-icons/cg'
import { useNavigate } from 'react-router-dom'


const Task = ({task, handleTaskClick, handleTaskDeletion}) => {
  const navigate = useNavigate ()

  const handleTaskDetailsClick = () => {
    navigate(`/${task.title}`)
  }

  return (
    <>
      <div className={styles.task_container} style={task.completed ? {borderLeft: ".8rem solid chartreuse", transition: ".3s all"} : {} }>
        <div className={styles.task_title} onClick={() => handleTaskClick(task.id)}>
          {task.title}
        </div>

        <div className={styles.buttons_container}>
          <button className={styles.remove_task_button} onClick={()=> handleTaskDeletion(task.id)}><CgClose/></button>
          <button className={styles.see_task_details_button} onClick={handleTaskDetailsClick}><CgInfo/></button>
        </div>
      </div>
    </>
  )
}

export default Task