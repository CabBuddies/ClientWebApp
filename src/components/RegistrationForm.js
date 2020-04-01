import React from 'react'
import {Link} from 'react-router-dom'

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
            <form onSubmit = {this.handleSubmit}>
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
            </form>
        )
    }
}

export default RegistrationForm