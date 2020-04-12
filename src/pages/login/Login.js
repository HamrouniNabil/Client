import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../JS/actions/action";
import {
  Container,
  Alert,
  Button,
  FormGroup,
  Label,
  InputGroup,
  InputGroupAddon,
  Input,
  InputGroupText,
  Spinner,
} from "reactstrap";
import Widget from "../../components/Widget";
import "../Style.css";
import microsoft from "../../images/microsoft.png";

class Login extends React.Component {
  state = {
    name: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  login = (e) => {
    e.preventDefault();
    this.props.login(this.state);
  };

  render() {
    const { isLoading } = this.props;
    return isLoading ? (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    ) : localStorage.getItem("token") ? (
      <Redirect to="/dashboard" />
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
              <p className="widget-auth-info">Use your email to sign in.</p>
              <form onSubmit={this.doLogin}>
                {this.props.errorMessage && (
                  <Alert
                    className="alert-sm widget-middle-overflow rounded-0"
                    color="danger"
                  >
                    {this.props.errorMessage}
                  </Alert>
                )}
                <FormGroup className="mt">
                  <Label for="email">Email</Label>
                  <InputGroup className="input-group-no-border">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="la la-user text-white" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      id="email"
                      className="input-transparent pl-3"
                      type="email"
                      required
                      name="email"
                      placeholder="Email"
                      onChange={this.handleChange}
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
                      id="password"
                      className="input-transparent pl-3"
                      type="password"
                      required
                      name="password"
                      placeholder="Password"
                      onChange={this.handleChange}
                    />
                  </InputGroup>
                </FormGroup>
                <div className="bg-widget auth-widget-footer">
                  <Button
                    type="submit"
                    color="danger"
                    className="auth-btn"
                    size="sm"
                    style={{ color: "#fff" }}
                    onClick={this.login}
                  >
                    <span
                      className="auth-btn-circle"
                      style={{ marginRight: 8 }}
                    >
                      <i className="la la-caret-right" />
                    </span>
                    {this.props.isFetching ? "Loading..." : "Login"}
                  </Button>
                  <p className="widget-auth-info mt-4">
                    Don't have an account? Sign up now!
                  </p>
                  <Link className="d-block text-center mb-4" to="register">
                    Create an Account
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
          </Container>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.authReducer.isLoading,
});

export default connect(mapStateToProps, { login })(Login);
