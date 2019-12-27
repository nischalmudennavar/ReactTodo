import React, { Component } from 'react'


export class AddTodo extends Component {

    state={
        title:''
    }
    onChange =(e)=>this.setState({title:e.target.value});
    
    onSubmit =(e)=>{
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title:''})

    }
    render() {
        return (
            <form style={{display:'flex'}} onSubmit={this.onSubmit}>

                <input type="text"
                name="title"
                placeholder="plan the day!" 
                style={{flex:10,padding:'5px',border:'4px #fff solid',height:'30px',borderRadius:'10px'}}
                value={this.state.title}
                onChange={this.onChange}
                />

                <input type="Submit"
                value="Go !"
                className="btn"
              
                style={{flex:1,padding:'5px',border:'none',backgroundColor:'#583174',color:'white',marginLeft:'10px',borderRadius:'10px'}} />
            </form>
        )
    }
}

export default AddTodo;
