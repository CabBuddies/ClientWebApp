import React from 'react'
import { Link } from 'react-router-dom'
import { Form, FormControl } from 'react-bootstrap'
import { FormGroup } from '@material-ui/core'

class RegistrationForm extends React.Component {
    constructor(props) {

        super(props)

        this.state = {
            userAuth:{
                email: '',
                password: ''
            },
            userDetails:{
                firstName: '',
                lastName: '',
                phoneNumber: ''
            },
            userVerifiedDetails:{
                email:'',
                phoneNumber:''
            }
        }
        this.handleChange = this.handleChange.bind(this)        
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        if(event.target.id === "email") 
            this.setState({email: event.target.value})
        else
            this.setState({password : event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault()
        alert(`Registration is in Development`)
    }

    render() {
        return(
            <Form onSubmit = {this.handleSubmit}>
                <FormGroup controlId = "registration">
                    <FormLabel> Sign Up </FormLabel>
                    <FormControl type = "text" placeholder = "First Name"/>
                    <FormControl type = "text" placeholder = "Last Name"/>
                </FormGroup>
                <fieldset>
                    <legend>Registration</legend>
                    <span>Email: </span>
                    <input id = "email" type="text" name="name" onChange = {this.handleChange}/>
                    <br/>
                    <span>Password: </span>
                    <input id = "password" type="text" name="name" onChange = {this.handleChange}/>
                    <br/>
                    <input type="submit" value="Submit" />
                    <br/>
                    <span>Already a User?</span>
                    <Link to = "/login">Sign In</Link>
                </fieldset>
            </Form>
        )
    }
}

export default RegistrationForm