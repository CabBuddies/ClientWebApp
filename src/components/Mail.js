import React from 'react'
import mail from 'ikmv-sampleisomorphicapilibrary'

class Mail extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            to: '',
            subject: '',
            html: ''
        }
    }

    handleChange = (event) => {
        let bdy = {}
        bdy[event.target.id] = event.target.value
        this.setState(bdy)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        mail.sendMail(this.state.to, this.state.subject, this.state.html)
    }

    render() {
        return(
            <form onSubmit = {this.handleSubmit}>
                <input id = "to" type = "text" name = "Email_To" onChange = {this.handleChange} /><br/>
                <input id = "subject" type = "text" name = "Subject" onChange = {this.handleChange} /><br/>
                <input id = "html" type = "html" name = "html" onChange = {this.handleChange} /><br/>
                <input type="submit"/>
            </form>
        )
    }
}

export default Mail