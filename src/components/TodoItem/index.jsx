import React from 'react'
import { connect } from 'react-redux'
import { delete_todo, toggle_todo } from '../../store/actions/todoList'

 const TodoItem = ({ todo,toggle_todo, delete_todo, id }) => {
      return <div
        style={
            {...styles , textDecoration: todo.complete ? 'line-through' : 'none'}}
            >
            <div style={styles2}>
            <span style={styles2}>
            {todo.text}
        </span>
        <button className='btns'style={styles2} onClick={() => toggle_todo(id)}>complete</button>
        <button className='btns'style={styles2} onClick={() => delete_todo(id)}>delete</button>
            </div>
        
    </div>
}
const styles = {
    display: 'flex',
    justifyContent: 'space-between'
}
const styles2 = {
    display: 'flex',
    justifyContent: 'space-between'
}
const mapDispatchToProps = dispatch => ({
    toggle_todo: (id) => dispatch(toggle_todo(id)),
    delete_todo: (id) => dispatch(delete_todo(id))
})

export default connect(null, mapDispatchToProps)(TodoItem)

