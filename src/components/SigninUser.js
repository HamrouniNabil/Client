import React, { Component } from 'react'
import { Button, Card, Form, Input, Container, Row, Col ,Spinner } from "reactstrap";
import ExamplesNavbar from "./Navbars/ExamplesNavbar.js";
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
      const {isLoading}= this.props;
        return (
            isLoading?<Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>:localStorage.getItem('token')?
          (<Redirect to="/home"/>):
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
                    <h3 className="title mx-auto">Welcome</h3>
                   
                    <Form className="register-form">
                      <label>Email</label>
                      <Input type="email" name="email" placeholder="Enter email" onChange={this.handleChange} />
                      <label>Password</label>
                      <Input type="password" name="password" placeholder="Password" onChange={this.handleChange} />
                      <Button block className="btn-round" color="info" onClick={this.login}>
                        Login
                      </Button>
                    </Form>
                    <div className="forgot">
                      <Button
                        className="btn-link"
                        color="info"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Forgot password?
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
    isLoading: state.authReducer.isLoading

})

export default connect(mapStateToProps,{login})(Signin)
