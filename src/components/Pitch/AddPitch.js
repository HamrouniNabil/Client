import React, { Component } from 'react'
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { addPitch } from '../../JS/actions/actionPitch';
import { Input } from 'reactstrap';

class AddPitch extends Component {
  state = {
    name: "aze",
    adresse: "aze",
    phone1: "12345678",
    phone2: "12345678",
    email: "a@a.com",
    capacite: 10,
    prix: "10",
    image: [],
  };

  handleChange = (e) => {
    console.log(e.target.files);
    const images = [];
    for (let i = 0; i < e.target.files.length; ++i) {
      images.push(e.target.files[i]);
    }
    this.setState({
      ...this.state,
      image: images,
    });
  };

  add = (e) => {
    e.preventDefault();
    const formData = new FormData();
    // formData.append('id', this.props.id);
    for (let key in this.state) {
      if (key === 'image') {
        for (let i = 0; i < this.state.image.length; ++i) {
          formData.append('image', this.state.image[i]);
        }
      } else {
        formData.append(key, this.state[key]);
      }
    }
    this.props.addPitch(formData);
  };

  render() {
    return (
      <div>
        <Form>
          <Form.Group>
            <Form.Label>Name Pitch</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter Name"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Adresse Pitch</Form.Label>
            <Form.Control
              type="text"
              name="adresse"
              placeholder="Enter Adresse"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Phone Number #1</Form.Label>
            <Form.Control
              type="text"
              name="phone1"
              placeholder="Enter Phone 1"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Phone Number #2</Form.Label>
            <Form.Control
              type="text"
              name="phone2"
              placeholder="Enter Phone 2"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              name="email"
              placeholder="Enter Email"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Capacity</Form.Label>
            <Form.Control
              type="number"
              name="capacite"
              placeholder="Enter Capacity"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Prix</Form.Label>
            <Form.Control
              type="text"
              name="prix"
              placeholder="Enter prix"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Pictures</Form.Label>
            <Input
              type="file"
              name="image"
              placeholder="Enter image"
              onChange={this.handleChange}
              multiple={true}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={this.add}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  id: state.authReducer.id,
});

export default connect(mapStateToProps, { addPitch })(AddPitch);