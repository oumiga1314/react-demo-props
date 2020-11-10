import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class Test extends Component{
  constructor(props){
    super(props)
    console.log("this.props====",this.props)
    this.state = {
      department: '',
      input: ''
    }
  }
   
  componentDidMount(){
    const {dept} = this.props
    let x = []
    dept.map((v,k)=>
      // console.log("v=====",v)
        x.push(v)
    )

    this.setState({
      department: x
    })
  }

  handleAdd=(e)=>{
    console.log("e=====",e.target.value)
    this.setState({
      input :e.target.value
    })
  };


  addDempartment=()=>{
    let x = this.state.department
    x.push(this.state.input)
    Object.keys(x).map((k)=>
    console.log(x[k]))
    this.setState({
      department:x,
      input: ''
    })
  }

  render() {
    
      const {department,input} = this.state
      const listItems = Object.keys(department).map((dept)=>
                  <div >
                   <li>{this.state.department[dept]}</li>
                  </div>
      )
    return(

    <div  style ={{marginTop: '100px',marginLeft:'40%'}}> 
       <input type='text' placeholder ='添加部门' onChange ={this.handleAdd} value = {this.state.input}/> 
        <button onClick = {this.addDempartment}  style ={{background:'#F0FFFF'}}>添加</button><br></br><br></br>
       <span style ={{fontWeight: 'bolder'}}>公司部门</span>
       <ol style={{marginLeft: '20px'}}>{listItems}</ol>
    </div>
    )  
  }
}

const dept = ['平台中心','研发部']
ReactDOM.render(<Test dept={dept}/>,document.getElementById('root'))
