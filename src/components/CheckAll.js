import React from 'react'

export default function CheckAll(props) {
  return (
    <div className="check-all-container">
        <div>
        <div className="button" onClick={props.completeAll}>Check All</div>
        </div>
        {
        props.todos.length > 0 ? (
            <span>{props.todos.length} items remaining</span>
        ) : ""
        }
    </div>
  )
}
