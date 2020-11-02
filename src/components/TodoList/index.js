import Reac, { Component } from 'react'

export default class TodoList extends Component {
    render() {
        return (
            <div>
                <form>
                    <input type="text"
                            placeholder="Nova Tarefa"
                            value={this.state.tarefa}
                            onChange={(e)=>this.setState({tarefa:e.targert.value})}
                            ref={(event)=>this._tarefaInput = event}/>
                </form>
            </div>
        )
    }
}

