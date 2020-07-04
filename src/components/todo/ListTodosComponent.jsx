import React, {Component} from 'react'
import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'
import moment from 'moment'
import Calendar from 'react-calendar';

class ListTodosComponent extends Component{
    constructor(props){
        console.log('constructor')
        super(props)
        this.state={
            todos:[],
            message:null
                
      
        }
        this.updateTodoClicked=this.updateTodoClicked.bind(this);
        this.deleteTodoClicked=this.deleteTodoClicked.bind(this);
        this.addTodoClicked=this.addTodoClicked.bind(this)
        this.refreshTodos=this.refreshTodos.bind(this)
       
    }

    shouldComponentUpdate(nextProps, nextState){

        console.log('shouldComponentUpdate')
        console.log(nextProps)
        console.log(nextState)
        
        return true
    }
    componentWillUnmount(){
        console.log('component will unmount')
    }
   componentDidMount() {
    console.log('componentDidMount')
    this.refreshTodos();
    console.log(this.state)
   }

    refreshTodos()    {
       let username= AuthenticationService.getLoggedInUserName();
       TodoDataService.retrieveAllTodos(username)
       .then(response=>this.setState({todos:response.data}))
    }

    addTodoClicked(id){
               this.props.history.push(`/todos/-1`)
    }

    updateTodoClicked(id){
        console.log('updatedTodo'+id)
        this.props.history.push(`/todos/${id}`)
    }
   
 deleteTodoClicked(id){
let username=AuthenticationService.getLoggedInUserName()
TodoDataService.deleteTodo(username,id)
.then(response=>{this.setState({message:`Delete of todo ${id} successful`})})
 this.refreshTodos()
}

    render(){
        return(
            <div>
                <h1>List Todos</h1>
                {this.state.message&&<div class="alert alert-success">{this.state.message}</div>}
                
                <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            
                            <th>description</th>
                            <th>Target Date</th>
                            <th>IS Completed?</th>
                            <th>Update</th>
                            <th>Delete</th>
                            </tr>
                    </thead>
    
                    <tbody>
                            {
                                this.state.todos.map(
                                    todo =>
                                        <tr key={todo.id}>
                                            <td>{todo.description}</td>
                                            
                                            <td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                                            <td>{todo.done.toString()}</td>
                                            <td><button className="btn btn-success" onClick={() => this.updateTodoClicked(todo.id)}>Update</button></td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                </table>
                     <div class="row">
                         <button className="btn btn-success" onClick={this.addTodoClicked}>Add</button>
                     </div>
               </div>
                </div>
        )
    
        
    }
    
    
    }

    export default ListTodosComponent