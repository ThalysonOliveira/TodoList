import Reac, {Component} from 'react'
import TodoList from './components/TodoList'
import './styles/todoliststyle.css'

export default class App extends Component{
  render(){
    return(
      <div>
        <h1>Lista de tarefas</h1>
        <TodoList/>
      </div>
    )
  }
}