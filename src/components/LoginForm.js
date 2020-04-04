import React from 'react'
// import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

/**
 * This component is for Login.
 */
class LoginForm extends React.Component {

    constructor(props) {
        super(props)

        // state of Login form
        this.state = {
            email: "",
            password: ""
        }
    }

    handleChange = (event) => {
        if(event.target.id === "email") 
            this.setState({email: event.target.value})
        else if(event.target.id === "pwd")
            this.setState({password : event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        alert(`
        Login Details:
        Email: ${this.state.email}
        Password: Chupettamga..
        `)
    }
    style = {
        form:{
            margin: '2px',
            width : '100%'
        }
    }

    render() {
        return(
            <div>
                <form style={this.style.form} onSubmit = {this.handleSubmit}>
                    <legend>Login:</legend>
                    <div>
                        <input type="text" id="email" placeholder="E-mail" required onChange = {this.handleChange}></input><br/>
                        <input type="password" id="pwd" placeholder="password" required onChange = {this.handleChange}></input><br/>
                        <button type="submit" id="lgbtn" >Login</button>
                    </div>
                </form>
            </div>
        )
    }

}

export default LoginForm