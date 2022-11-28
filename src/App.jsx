import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {v4 as uuid} from 'uuid'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styles from './App.module.css'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/Addtask/AddTask'
import TaskDetails from './components/TaskDetails'


const App = () => {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Esudar Programação',
      completed: false,
    },

    {
      id: 2,
      title: 'Ler Livro',
      completed: true
    },
  ]);

  useEffect (()=> {
    const fetchTasks = async () => {
      const {data} = await axios.get(`https://jsonplaceholder.cypress.io/todos?_limit=10`)

      setTasks(data)
    }


    fetchTasks()
  }, [])

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if(task.id === taskId) {
        return {...task, completed: !task.completed}
      } return task;
    })
    setTasks(newTasks)
  }

  const handleTaskAddition = (taskTitle) => {
      const newTasks = [...tasks, {
        title: taskTitle,
        id: uuid()
      }
    ]
    setTasks(newTasks)
  }

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId)

    setTasks(newTasks)
  }

 
  return (
    <Router>
      <div className={styles.container}>
        <Header/>
        <Routes>
          <Route path='/' exact element={(
            <>
              <AddTask handleTaskAddition={handleTaskAddition} />
              <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion}/>
            </>
          )}/>
        </Routes>

        <Routes>
          <Route path='/:taskTitle' exact element={<TaskDetails/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App