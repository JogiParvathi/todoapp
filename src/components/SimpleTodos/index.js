import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'


// Write your code here
class SimpleTodos extends Component {
  state = {
    todosList:[
      {id: 1, title: 'Book the ticket for today evening',completed:false},
      {id: 2, title: 'Rent the movie for tomorrow movie night',completed:false},
      {id: 3, title: 'Confirm the slot for the yoga session tomorrow morning',completed:false},
  {id: 4, title: 'Drop the parcel at Bloomingdale',completed:false},
  {id: 5, title: 'Order fruits on Big Basket',completed:false},
  {id: 6, title: 'Fix the production issue',completed:false},
  {id: 7, title: 'Confirm my slot for Saturday Night',completed:false},
  {id: 8, title: 'Get essentials for Sunday car wash',completed:false},

    ],
    newTodoTitle:'',
    newTodoCount:1,
  }

  handleAddTodo=()=>{
    const {newTodoTitle,newTodoCount}=this.state
    const newTodos=Array.from({length:newTodoCount},(_, i)=>({
      id:Date.now() +i,
      title:newTodoTitle,
      completed:false,
    }))
    this.setState(prevState=>({
      todosList:[...prevState.todosList,...newTodos],
      newTodoTitle:'',
      newTodoCount:1,
    }))
  }

  handleChange=e=>{
    this.setState({[e.target.name]: e.target.value})
  }


  deletTodo = id => {
    this.setState(prevState=>{
    const updatedTodosList = prevState.todosList.filter(todo => todo.id !== id)
    return {todosList:updatedTodosList}

    })

  }

  toggleComplete=id=>{
    this.state(prevState=>{
      const updatedTodosList=prevState.todosList.map(todo=>
      todo.id===id ? {...todo, completed:!todo.completed}:todo,
      )
      return {todosList:updatedTodosList}
    })
  }



  render() {
    const {todosList,newTodoTitle,newTodoCount} = this.state

    return (
      <div className="app-container">
        <div className="simple-todos-container">
          <h1 className="heading">Simple Todos</h1>
          <div className='add-todo'>
          <input 
          type='text'
          name='newTodoTitle'
          value={newTodoTitle}
          onChange={this.handleChange}
          placeholder="Enter todo title"
          />
          <input 
          type='number'
          name='newTodoCount'
          value={newTodoCount}
          onChange={this.handleChange}
          placeholder="Enter number of todos"
          />
          <button onClick={this.handleAddTodo} type='button'>
          Add
          </button>
          </div>

          <ul className="todos-list">
            {todosList.map(todo => (
              <TodoItem
                key={todo.id}
                todoDetails={todo}
                deleteTodo={this.deletTodo}
                toggleComplete={this.toggleComplete}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default SimpleTodos
