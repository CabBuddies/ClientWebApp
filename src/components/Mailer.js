import React from 'react'
import mailer from 'ikmv-sampleisomorphicapilibrary'

class Mailer extends React.Component {

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
        console.log(bdy)
        this.setState(bdy)
        // if(event.target.id === "to") 
        //     this.setState({to: event.target.value})
        // else if(event.target.id === "subject")
        //     this.setState({subject : event.target.value})
        // else 
        //     this.setState({html: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        mailer.sendMail(this.state.to, this.state.subject, this.state.html)
    }

    render() {
        return(
            <form onSubmit = {this.handleSubmit}>
                <input id = "to" type = "text" name = "Email_To" onChange = {this.handleChange} />
                <input id = "subject" type = "text" name = "Subject" onChange = {this.handleChange} />
                <input id = "html" type = "html" name = "html" onChange = {this.handleChange} />
                <input type="submit"/>
            </form>
        )
    }
}

export default Mailer