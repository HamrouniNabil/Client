import React, { Component } from 'react'
import { Button, Card, Form, Input, Container, Row, Col ,Spinner } from "reactstrap";
import ExamplesNavbar from "./Navbars/ExamplesNavbar.js";
import {connect} from 'react-redux'
import {register} from '../JS/actions/action'
import {Redirect} from 'react-router-dom'

 class SignupUser extends Component {

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
        <>
        <ExamplesNavbar />
        <div
          className="page-header"
          style={{
            backgroundImage: "url(" + require("../assets/img/Champions.jpg") + ")"
          }}
        >
          <div className="filter" />
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" lg="4">
                <Card className="card-register ml-auto mr-auto">
                  <h3 className="title mx-auto">Sign Up</h3>
                 
                  <Form className="register-form">
                    <label>Name</label>
                    <Input type="name" name="name" placeholder="Enter Your Name" onChange={this.changeHandler} />
                    <label>Email</label>
                    <Input type="email" name="email" placeholder="Enter email" onChange={this.changeHandler} />
                    <label>Password</label>
                    <Input type="password" name="password" placeholder="Password" onChange={this.changeHandler} />
                    <label>Phone Number</label>
                    <Input type="text" name="phone" placeholder="Enter Phone Number" onChange={this.changeHandler} />
                    <Button block className="btn-round" color="info" onClick={this.register}>
                      Register
                    </Button>
                  </Form>
                  <div className="forgot">
                    <Button
                      className="btn-link"
                      color="info"
                      href="#pablo"
                      
                    >
                  
                    </Button>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
          <div className="footer register-footer text-center">
            <h6>
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> by Creative Tim
            </h6>
          </div>
        </div>
        </> 
        
           
        )
    }
}
const mapStateToProps = state=>({
  isLoading:state.authReducer.isLoading,
  user:state.authReducer.user
})

export default connect(mapStateToProps,{register})(SignupUser)
