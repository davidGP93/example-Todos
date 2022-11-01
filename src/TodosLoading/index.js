import React from 'react'
import './TodosLoading.css'

const TodosLoading = () => {
  return (
    <div className='LoadingTodo-container'>
      <span className='LoadingTodo-completeIcon'></span>
        <p className='LoadingTodo-text'>Espera un momento ...</p>
      <span className='LoadingTodo-deleteIcon'></span>
    </div>
    
  )
}

export { TodosLoading };