import React from 'react'
import { Form, Button, Container, Col, Row, InputGroup } from 'react-bootstrap'
import { Icon } from 'semantic-ui-react'

/**
 * This component is for Login.
 */
class LoginForm extends React.Component {

    constructor(props) {
        super(props)

        // state of Login form
        this.state = {
            email: "",
            password: "",
            rememberMe: false
        }
    }

    handleChange = (event) => {
        if(event.target.id === "email") 
            this.setState({email: event.target.value})
        else if(event.target.id === "password")
            this.setState({password : event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { email, rememberMe } = this.state
        localStorage.setItem('rememberMe', rememberMe)
        if(rememberMe)
            localStorage.setItem('email', email)
        alert(`
        Login Details:
        Email: ${this.state.email}
        Password: Chupettamga..
        `)
    }

    toggleRememberMe = (event) => {
        const input = event.target
        const value = input.type === 'checkbox' ? input.checked : input.value
        this.setState({[input.name]: value})
    }

    render() {
        if(localStorage.getItem('email')) {
            return(<h1>You'll be redirected to home page</h1>)
        }
        return(
            <>
            <style type="text/css">
            {`
            .nav-tabs {
                margin-bottom: 1rem
            }
            .nav-tabs .nav-link{
                width:50%
            }
            `}
            </style>
            <Container>
                <Form onSubmit = {this.handleSubmit}>
                    {/* Email Element */}
                <Form.Group controlId = "email">
                <InputGroup>
                <InputGroup.Prepend>
                    <Icon name="user outline" color="blue" size="large" />
                </InputGroup.Prepend>
                    <Form.Control type = "email" placeholder = "Enter email" value = {this.state.email} onChange = {this.handleChange} />
                </InputGroup>
                </Form.Group>

                {/* Password Element */}
                <Form.Group controlId = "password">
                <InputGroup>
                <InputGroup.Prepend>
                    <Icon name="key" color="blue" size="large" />
                </InputGroup.Prepend>
                <Form.Control type = "password" placeholder = "Enter password" value = {this.state.password}  onChange = {this.handleChange} />
                </InputGroup>
                </Form.Group>

                {/* CheckBox */}
                <Form.Group controlId = "rememberMe">
                    <Form.Check type = "checkbox" label = "Remember me"  name = "rememberMe" checked = {this.state.rememberMe} onChange = {this.toggleRememberMe} />
                </Form.Group>

                {/* Centered Button */}
                <Form.Group as={Row}>
                    <Col xs={{ span: 6, offset: 4 }}>
                    <Button type = "submit" variant = "primary" size = "lg">
                        Login
                    </Button>
                    </Col>
                </Form.Group>
                </Form>
            </Container>
            </>
            
        )
    }

}

export default LoginForm