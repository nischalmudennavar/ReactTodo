import React, { Component } from 'react'
import PropTypes from 'prop-types';



export class TodoItem extends Component {
    getStyle=()=>{
        return {
            backgroundColor:'#11111f',
            color:'white',
            marginTop:'10px',
            listStyle:'none',
            fontSize:'15px',
            fontWeight:'100',
            padding:'5px',
            borderRadius:'10px',
            
            height:'50px',
            textDecoration:this.props.todo.completed ?
            'Line-through' : 'none'
        }
    }
    markComplete =(e)=>{
            console.log(this.props)
    }
    render() {
        const {id,title} = this.props.todo;
        return (
            <div style={this.getStyle() }>
                
                <p>
                <input type="checkbox" onChange={this.props.markComplete.bind(this,id)} style={{ margin:'6px'}}/>{''}
                <span style={{marginLeft:'20px',marginTop:'0px'}}>{title}</span>
                <button style={btn} onClick={this.props.delTodo.bind(this,id)}> X</button>
                </p>
            </div>
        )
    }
}
TodoItem.propTypes ={
    todos : PropTypes.array.isRequired
}
const btn={
    backgroundColor:'#fff',
    float:'right',
    width:'40px',
    height:'30px',
    fontWeight:'900',
    border:'none',
    backgroundColor:'#583174',
    color:'#fff',
    borderRadius:'5px',
    marginRight:'10px',
    marginTop:'-5px',
    display:'flex',
    justifyContent:'center',
    alignContent:'center',

}

export default TodoItem;
