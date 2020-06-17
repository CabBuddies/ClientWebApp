import React,{useState} from 'react'
import mail from 'ikmv-sampleisomorphicapilibrary'

function Mail(props) {

    const [details,setDetails] = useState({to: '',subject: '' , html: ''})

    const handleChange = (event) => {
        let bdy = {}
        bdy[event.target.id] = event.target.value
        setDetails(bdy)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        mail.sendMail(details.to,details.subject, details.html)
    }
        return(
            <form onSubmit = {handleSubmit}>
                <input id = "to" type = "text" name = "Email_To" onChange = {handleChange} /><br/>
                <input id = "subject" type = "text" name = "Subject" onChange = {handleChange} /><br/>
                <input id = "html" type = "html" name = "html" onChange = {handleChange} /><br/>
                <input type="submit"/>
            </form>
        )
    }

export default Mail