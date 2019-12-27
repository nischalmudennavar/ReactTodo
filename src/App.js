
//main js which recieves all the components 



import React,{Component} from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';

import './App.css';

class App extends Component {

  state={
    todos:[
      {
        id:1,
        title:'Complete the list!',
        completed:false

      }
      
    ]
  }
  //marking todos
  markComplete =(id)=>{
    this.setState({todo:this.state.todos.map(todo=> {
      if(todo.id===id)
      {
        todo.completed=!todo.completed;
      }
      return todo;
    }) });
  }
  delTodo =(id)=>{
    this.setState({ todos:[...this.state.todos.filter(todo=> todo.id!==id)]})
  }

  addTodo = (title)=>{
    const newTodo={
      id:uuid.v4(),
      title,
      completed:false
    }
    this.setState({todos:[...this.state.todos,newTodo]});
  }
  render() {


    return(
      <div className="App">
      <h1 style={{color:'#fff'}}>theTodoApp</h1>
      <AddTodo addTodo={this.addTodo} />
       <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} id="animateTodo" className="todoo" /> 
        {/* // this is MOFO prop!  */}
      </div>
    );
  }
}


export default App;
