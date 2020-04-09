import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Form,Button,Spinner} from 'react-bootstrap'
import {register} from '../JS/actions/action'
import {Redirect} from 'react-router-dom'

 class Signup extends Component {


    state= {
        email:"",
        name:"",
        password:"",
        phone:""
    }

    changeHandler = e =>
    this.setState({
        ...this.state,
        [e.target.name]:e.target.value
    })

    register =(e)=> {
        e.preventDefault();
        this.props.register(this.state)
    }
    render() {
        const {isLoading,user} = this.props 
        return ( 
          
          isLoading?<Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>:user? (<Redirect to="/login"/>)
        :
       
        
            <div>
                <Form  onSubmit={this.register} >
                <Form.Group controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" name="name" placeholder="Enter the Name" onChange={this.changeHandler}/>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name="email" placeholder="Enter email" onChange={this.changeHandler}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name="password" placeholder="Password" onChange={this.changeHandler}/>
  </Form.Group>
  
  <Form.Group controlId="formBasicPhone">
    <Form.Label>Phone Number</Form.Label>
    <Form.Control type="text" name="phone" placeholder="Enter the Phone" onChange={this.changeHandler}/>
   
  </Form.Group>

  <Button variant="primary" type="submit" onClick={this.register}>
    Submit
  </Button>
</Form>
            </div>
        )
    }
}
const mapStateToProps = state=>({
  isLoading:state.authReducer.isLoading,
  user:state.authReducer.user
})

export default connect(mapStateToProps,{register})(Signup)
