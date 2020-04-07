import React from 'react'
import SocialLoginItem from './SocialLoginItem'
import { ListGroup, Container } from 'react-bootstrap'

class SocialLogin extends React.Component {
    constructor(props) {
        super(props)
        }

    render() {
        return(
            <Container>
                <ListGroup horizontal = "xl" variant = "flush" as = "ul">
                    <SocialLoginItem accountType = "Facebook" />
                    <SocialLoginItem accountType = "Google" />
                    <SocialLoginItem accountType = "Linkedin" />
                    <SocialLoginItem accountType = "Twitter" />
                </ListGroup>
            </Container>
        )
    }

}

export default SocialLogin