import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { add_todo } from '../../store/actions/todoList'
import TodoItem from '../TodoItem'


const TodoList = ({ state, add_todo }) => {
    const [inputValue, setInputValue] = useState('')
    

    // console.log(state)
    return <div  className="container">
            <h1>Redux TodoList</h1>
        <div className="inp">
            <input
                placeholder="type smth ... "
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                
            />
            
            <button className='btn' onClick={(id) => add_todo((inputValue))}>Add</button>
        </div>
        
        <ul className='ul'>
            {state.map((todo, id) => {
                return <TodoItem id={id} todo={todo} key={id} />
            })}
        </ul>
    </div>
}
// const styles = {
//     width: '500px',
//     margin: '0 auto'
// }
const mapStatetoProps = state => ({
    state: state.todolist
})

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        add_todo
    }, dispatch)
}


export default connect(mapStatetoProps, mapDispatchToProps)(TodoList)
