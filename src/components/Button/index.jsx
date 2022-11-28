import React from 'react'
import styles from './Button.module.css'

const Button = ({children, onClickAddTask}) => {
  return (
    <button onClick={onClickAddTask} className={styles.button}>
        {children}
    </button>
  )
}

export default Button