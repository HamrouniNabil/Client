import React, { Component } from 'react'
import {Form,Button,Spinner} from 'react-bootstrap'
import { connect } from 'react-redux'
import {login} from '../JS/actions/action'
import { Redirect } from 'react-router-dom'

 class Signin extends Component {

    state={
        name:"",
        password:""
    }

    handleChange=e=>{
        this.setState({
            ...this.state,
            [e.target.name]:e.target.value
        })
    }

    login= e => {
        e.preventDefault();
        this.props.login(this.state)

    }
    render() {
        console.log(login)
        const {isLoading}= this.props;
        return (
            isLoading?<Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>:localStorage.getItem('token')?
          (<Redirect to="/home"/>):
           
            <div>
                <Form   onSubmit={this.login}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name="email" placeholder="Enter email" onChange={this.handleChange} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name="password" placeholder="Password" onChange={this.handleChange} />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit" onClick={this.login}>
    Submit
  </Button>
</Form>
            </div>
        )
    }
}

const mapStateToProps = state=>({
    isLoading: state.authReducer.isLoading

})

export default connect(mapStateToProps,{login})(Signin)
