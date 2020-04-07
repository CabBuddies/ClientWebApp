import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'

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

    style = {
        form:{
            margin: '2px',
            width : '100%'
        }
    }

    render() {
        if(localStorage.getItem('email')) {
            return(<h1>You'll be redirected to home page</h1>)
        }
        return(
            <Container>
                <Form onSubmit = {this.handleSubmit}>
                <Form.Group controlId = "email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type = "email" placeholder = "Enter email" value = {this.state.email} onChange = {this.handleChange} />
                </Form.Group>
                <Form.Group controlId = "password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type = "password" placeholder = "Enter password" value = {this.state.password}  onChange = {this.handleChange} />
                </Form.Group>
                <Form.Group controlId = "rememberMe">
                    <Form.Check type = "checkbox" label = "Remember me"  name = "rememberMe" checked = {this.state.rememberMe} onChange = {this.toggleRememberMe} />
                </Form.Group>
                <Button type = "submit" variant = "primary" size = "sm">
                    Login
                </Button>
                </Form>
            </Container>
            
        )
    }

}

export default LoginForm