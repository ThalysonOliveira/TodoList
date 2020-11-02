import Reac, { Component } from 'react'

export default class TodoList extends Component {
    constructor(props){
        super(props)
        this.state={
            tarefa: '',
            items: []
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.addItem}>
                    <input type="text"
                            placeholder="Nova Tarefa"
                            value={this.state.tarefa}
                            onChange={(e)=>this.setState({tarefa:e.target.value})}
                            ref={(event)=>this._tarefaInput = event}/>
                    <button type="submit">Adicionar</button>
                </form>
            </div>
        )
    }
}

