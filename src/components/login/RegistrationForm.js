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
                    {/* Form row for First name and Last name */}
                    <Form.Row required>
                        <Form.Group controlId = "firstName" as = {Col} >
                        <Form.Control type = "text" placeholder = "First Name" required value = {this.state.firstName} onChange = {this.handleChange} />
                        </Form.Group>
                        <Form.Group controlId = "lastName" as = {Col} >
                        <Form.Control type = "text" placeholder = "Last Name" required value = {this.state.lastName} onChange = {this.handleChange} />
                        </Form.Group>
                    </Form.Row>

                    {/* Email Element */}
                    <Form.Group controlId = "email" required>
                        <Form.Control type = "email" placeholder = "Enter Email" required value = {this.state.email} onChange = {this.handleChange} />
                    </Form.Group>

                    {/* Password Element */}
                    <Form.Group controlId = "password" required>
                        <Form.Control type = "password" placeholder = "Enter Password" required value = {this.state.password} onChange = {this.handleChange} />
                    </Form.Group>

                    {/* Phone Number Element */}
                    <Form.Group controlId = "phoneNumber">
                        <Form.Control type = "tel" placeholder = "Enter Phone Number" value = {this.state.phoneNumber} onChange = {this.handleChange} />
                    </Form.Group>
                    <Form.Group as={Row}>
                    <Col xs={{ span: 6, offset: 4 }}>
                    <Button type = "submit" variant = "primary" size = "lg">
                        Sign up
                    </Button>
                    </Col>
                    </Form.Group>
                </Form>
            </Container>
            </>
        )
    }
}

export default RegistrationForm