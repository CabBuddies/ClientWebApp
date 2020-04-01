import React from 'react'
import {Link} from 'react-router-dom'
// import userData from '../data/users'

class LoginForm extends React.Component {

    constructor(props) {
        super(props)

        // state of Login form
        this.state = {
            email: "",
            password: ""
        }

        /*
        * Binding is not necessary if we are using arrow functions.
        * Arrow functions directly bind 'this'.
        * 
        * this.handleChange = this.handleChange.bind(this)
        * this.handleSubmit = this.handleSubmit.bind(this)
        */
        
    }

    handleChange = (event) => {
        console.log(event.target.value)
        if(event.target.id === "email") 
            this.setState({email: event.target.value})
        else
            this.setState({password : event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        alert(`Login is in Development`)
    }

    render() {
        return(
            <form onSubmit = {this.handleSubmit}>
                <fieldset>
                <legend>Login</legend>
                <span>Email: </span>
                <input 
                id = "email" 
                type="text"
                aria-required="true"
                name="name"
                onChange = {this.handleChange}/>
                <br/>
                <span>Password: </span>
                <input id = "password" type="text" name="name" onChange = {this.handleChange}/>
                <br/>
                <input type="submit" value="Submit" />
                <br/>
                <span>New User? </span>
                <Link to = "/registration">SignUp</Link>
                </fieldset>
            </form>
        )
    }

}

export default LoginForm