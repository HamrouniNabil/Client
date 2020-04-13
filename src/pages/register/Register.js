import React from "react";

import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../../JS/actions/action";
import {
  Container,
  Alert,
  Button,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Label,
  Spinner,
} from "reactstrap";
import Widget from "../../components/Widget";

import microsoft from "../../images/microsoft.png";

class Register extends React.Component {
  state = {
    email: "",
    name: "",
    password: "",
    phone: "",
    role: "",
  };

  changeHandler = (e) =>
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });

  register = (e) => {
    e.preventDefault();
    this.props.register(this.state);
  };

  render() {
    const { isLoading } = this.props;
    return isLoading ? (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    ) : localStorage.getItem("token") ? (
      <Redirect to="/" />
    ) : (
      <div
        className="page-header"
        style={{
          backgroundImage: "url(" + require("../../images/Champions.jpg") + ")",
        }}
      >
        <div className="auth-page">
          <Container>
            <Widget
              className="widget-auth mx-auto"
              title={<h3 className="mt-0">Login to your Web App</h3>}
            >
              <p className="widget-auth-info">Please fill all fields below.</p>
              <form onSubmit={this.register}>
                <FormGroup className="mt">
                  <Label for="name">Name</Label>
                  <InputGroup className="input-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="la la-user text-white" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      className="input-transparent pl-3"
                      onChange={this.changeHandler}
                      type="name"
                      required
                      name="name"
                      placeholder="Name"
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup className="mt">
                  <Label for="">Email</Label>
                  <InputGroup className="input-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="la la-at" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      className="input-transparent pl-3"
                      onChange={this.changeHandler}
                      type="email"
                      required
                      name="email"
                      placeholder="Email"
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <InputGroup className="input-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="la la-lock text-white" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      className="input-transparent pl-3"
                      onChange={this.changeHandler}
                      type="password"
                      required
                      name="password"
                      placeholder="Password"
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <Label for="phone">Phone Number</Label>
                  <InputGroup className="input-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="la la-phone" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      className="input-transparent pl-3"
                      type="text"
                      required
                      name="phone"
                      placeholder="Phone Number"
                      onChange={this.changeHandler}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <Label for="user">User Select </Label>
                  <Input
                    type="select"
                    name="role"
                    id="exampleSelect"
                    className="input-transparent pl-3"
                    onChange={this.changeHandler}
                  >
                    <option selected>Choose the user</option>
                    <option value="User">User</option>
                    <option value="Agent">Agent</option>
                  </Input>
                </FormGroup>
                <div className="bg-widget-transparent auth-widget-footer">
                  <Button
                    type="submit"
                    color="danger"
                    className="auth-btn"
                    size="sm"
                    style={{ color: "#fff" }}
                    onClick={this.register}
                  >
                    {this.props.isFetching ? "Loading..." : "Register"}
                  </Button>
                  <p className="widget-auth-info mt-4">
                    Already have the account? Login now!
                  </p>
                  <Link className="d-block text-center mb-4" to="/">
                    Enter the account
                  </Link>
                  <div className="social-buttons">
                    <Button color="primary" className="social-button">
                      <i className="social-icon social-google" />
                      <p className="social-text">GOOGLE</p>
                    </Button>
                    <Button color="success" className="social-button">
                      <i
                        className="social-icon social-microsoft"
                        style={{ backgroundImage: `url(${microsoft})` }}
                      />
                      <p className="social-text" style={{ color: "#fff" }}>
                        MICROSOFT
                      </p>
                    </Button>
                  </div>
                </div>
              </form>
            </Widget>
            {/*<Widget className="widget-auth mx-auto" title={<h3 className="mt-0">Create an account</h3>}>*/}
            {/*<p className="widget-auth-info">*/}
            {/*Please fill all fields below*/}
            {/*</p>*/}
            {/*<form className="mt" onSubmit={this.doRegister}>*/}
            {/*{*/}
            {/*this.props.errorMessage && (*/}
            {/*<Alert className="alert-sm" color="danger">*/}
            {/*{this.props.errorMessage}*/}
            {/*</Alert>*/}
            {/*)*/}
            {/*}*/}
            {/*<div className="form-group">*/}
            {/*<input className="form-control no-border" value={this.state.email}*/}
            {/*onChange={this.changeEmail} type="text" required name="email"*/}
            {/*placeholder="Email"/>*/}
            {/*</div>*/}
            {/*<div className="form-group">*/}
            {/*<input className="form-control no-border" value={this.state.password}*/}
            {/*onChange={this.changePassword} type="password" required name="password"*/}
            {/*placeholder="Password"/>*/}
            {/*</div>*/}
            {/*<div className="form-group">*/}
            {/*<input className="form-control no-border" value={this.state.confirmPassword}*/}
            {/*onChange={this.changeConfirmPassword} onBlur={this.checkPassword} type="password" required name="confirmPassword"*/}
            {/*placeholder="Confirm"/>*/}
            {/*</div>*/}
            {/*<Button type="submit" color="inverse" className="auth-btn mb-3" size="sm">{this.props.isFetching ? 'Loading...' : 'Register'}</Button>*/}
            {/*<p className="widget-auth-info">or sign up with</p>*/}
            {/*<div className="social-buttons">*/}
            {/*<Button onClick={this.googleLogin} color="primary" className="social-button mb-2">*/}
            {/*<i className="social-icon social-google"/>*/}
            {/*<p className="social-text">GOOGLE</p>*/}
            {/*</Button>*/}
            {/*<Button onClick={this.microsoftLogin} color="success" className="social-button">*/}
            {/*<i className="social-icon social-microsoft"*/}
            {/*style={{backgroundImage: `url(${microsoft})`}}/>*/}
            {/*<p className="social-text">MICROSOFT</p>*/}
            {/*</Button>*/}
            {/*</div>*/}
            {/*</form>*/}
            {/*<p className="widget-auth-info">*/}
            {/*Already have the account? Login now!*/}
            {/*</p>*/}
            {/*<Link className="d-block text-center" to="login">Enter the account</Link>*/}
            {/*</Widget>*/}
          </Container>
          <footer className="auth-footer"></footer>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  isLoading: state.authReducer.isLoading,
  user: state.authReducer.user,
});

export default connect(mapStateToProps, { register })(Register);
