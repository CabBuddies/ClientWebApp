import React from 'react'
import { ListGroup } from 'react-bootstrap'
import SocialLoginItem from './SocialLoginItem'

class SocialLogin extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <ListGroup horizontal = "sm" variant = "flush" as = "ul">
                <SocialLoginItem accountType = "Facebook" />
                <SocialLoginItem accountType = "Google" />
                <SocialLoginItem accountType = "Linkedin" />
                <SocialLoginItem accountType = "Twitter" />
            </ListGroup>
        )
    }

}

export default SocialLogin