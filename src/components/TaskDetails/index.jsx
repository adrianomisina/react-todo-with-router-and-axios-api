import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Button from '../Button'
import styles from './TaskDetails.module.css'

const TaskDetails = () => {

  const params = useParams()
  const navigate = useNavigate()

  return (
    <>
      <div className={styles.back_button_container}>
        <Link onClick={navigate(-1)}>
          <Button>Voltar</Button>
        </Link>
      </div>

      <div className={styles.task_details_container}>
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, incidunt! Soluta doloremque sit aut exercitationem tempora, 
          laborum explicabo quisquam consequuntur aperiam maxime, molestias quas deleniti dignissimos, tempore itaque quo. Dicta.
        </p>
      </div>
    </>
  )
}

export default TaskDetails