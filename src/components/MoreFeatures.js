import React from 'react'

export default function MoreFeatures(props) {
  return (
    <div className="other-buttons-container">
        <div>
        <button className={`button filter-button ${props.filter === "all" ? 'filter-button-active' : ''}`} onClick={()=>{props.setFilter("all")}}>
            All
        </button>
        <button className={`button filter-button ${props.filter === "active" ? 'filter-button-active' : ''}`} onClick={()=>{props.setFilter("active")}}>
            Active
        </button>
        <button className={`button filter-button ${props.filter === "completed" ? 'filter-button-active' : ''}`} onClick={()=>{props.setFilter("completed")}}>
            Completed
        </button>
        </div>
        <div>
        <button className="button" onClick={props.clearCompleted}>Clear completed</button>
        </div>
    </div>
  )
}
