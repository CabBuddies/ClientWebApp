import React from 'react'
import { Link } from 'react-router-dom'
import { Form, FormControl } from 'react-bootstrap'

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
        this.handleChange = this.handleChange.bind(this)        
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const value = event.target.value;
        this.setState({
          ...this.state,
          [event.target.name]: value
        });
      }

    handleSubmit(event) {
        event.preventDefault()
        alert(`
        Registration Details:
        FirstName: ${this.state.firstName}
        LastName: ${this.state.lastName}
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
                    <legend>Signup:</legend>
                    <div>
                        <input type="text" id="fn" placeholder="First Name" required onChange = {this.handleChange}></input><br/>
                        <input type="text" id="ln" placeholder="Last Name" required onChange = {this.handleChange}></input><br/>
                        <input type="text" id="email" placeholder="E-mail" required onChange = {this.handleChange}></input><br/>
                        <input type="password" id="pwd" placeholder="password" required onChange = {this.handleChange}></input><br/>
                        <button type="submit" id="lgbtn" >Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default RegistrationForm