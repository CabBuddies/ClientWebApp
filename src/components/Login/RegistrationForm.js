import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

class RegistrationForm extends React.Component {
    constructor(props) {

        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            password: '',
        }
    }

    handleChange = (event) => {
        const value = event.target.value;
        this.setState({
          ...this.state,
          [event.target.id]: value
        });
      }

    handleSubmit = (event) => {
        event.preventDefault()
        alert(`
        Registration Details:
        FirstName: ${this.state.firstName}
        LastName: ${this.state.lastName}
        Email: ${this.state.email}
        Password: Chupettamga..
        `)
    }

    render() {
        return(
            <>
            <style type="text/css">
            {`
            .form {
            width: "50%"
            margin: auto
            }`
            }
            </style>
            <Container> 
                <Form onSubmit = {this.handleSubmit}>
                    <Form.Row required>
                        <Form.Group controlId = "firstName" as = {Col} >
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type = "text" placeholder = "First Name" value = {this.state.firstName} onChange = {this.handleChange} />
                        </Form.Group>
                        <Form.Group controlId = "lastName" as = {Col} >
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type = "text" placeholder = "Last Name" value = {this.state.lastName} onChange = {this.handleChange} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Group controlId = "email" required>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type = "email" placeholder = "Enter Email" value = {this.state.email} onChange = {this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId = "password" required>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type = "password" placeholder = "Enter Password" value = {this.state.password} onChange = {this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId = "phoneNumber">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type = "tel" placeholder = "Enter Phone Number" value = {this.state.phoneNumber} onChange = {this.handleChange} />
                    </Form.Group>
                    <Button type = "submit" variant = "primary" size = "sm">
                        Sign up
                    </Button>
                </Form>
            </Container>
            </>
        )
    }
}

export default RegistrationForm