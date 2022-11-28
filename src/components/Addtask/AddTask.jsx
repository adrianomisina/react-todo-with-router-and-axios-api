import React, {useState} from 'react'
import Button from '../Button'
import styles from './AddTask.module.css'

const AddTask = ({handleTaskAddition}) => {

  const [inputData, setInputData] = useState('')

  const handleInputChange = (e) => {
    console.log(e.target.value)
    setInputData(e.target.value)
  }

  const handleAddTaskClick = () => {
    handleTaskAddition(inputData)
    setInputData('')
  }

  return (
    <div className={styles.add_task_container}>
        <input 
          onChange={handleInputChange} 
          value={inputData}
          className={styles.add_task_input} 
          type="text" />
        <div className={styles.add_task_button_container}>
          <Button onClickAddTask={handleAddTaskClick}>Adicionar</Button>
        </div>
    </div>
  )
}

export default AddTask