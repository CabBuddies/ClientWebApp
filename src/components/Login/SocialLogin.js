import React from 'react'
import {ListGroup, ListGroupItem} from 'react-bootstrap'

class SocialLogin extends React.Component {
    constructor(props) {
        super(props)
        }

        render() {
        return(
        <ListGroup horizontal = "sm" variant = "flush" as = "ul">
        <ListGroupItem as = "li">
        FaceBook
        </ListGroupItem>
        <ListGroupItem as = "li">
        Google
        </ListGroupItem>
        <ListGroupItem as = "li">
        LinkedIn
        </ListGroupItem>
        <ListGroupItem as = "li">
        Twitter
        </ListGroupItem>
        </ListGroup>
        )
        }
}

export default SocialLogin