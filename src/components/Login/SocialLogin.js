import React from 'react'
import {ListGroup, ListGroupItem, Container} from 'react-bootstrap'
import { Button, Icon } from 'semantic-ui-react'

class SocialLogin extends React.Component {
    constructor(props) {
        super(props)
        }

    render() {
        return(
        <Container>
        <ListGroup horizontal = "sm"  as = "ul">
        <ListGroupItem as = "li">
        <Button color='facebook' icon='facebook' size='huge'/>
        </ListGroupItem>
        <ListGroupItem as = "li">
        <Button color='linkedin' icon='linkedin' size='huge'/>
        </ListGroupItem>
        <ListGroupItem as = "li">
        <Button color='twitter' icon='twitter' size='huge'/>
        </ListGroupItem>
        <ListGroupItem as = "li">
        <Button color='green' icon='google' size='huge'/>
        </ListGroupItem>
        </ListGroup>
        </Container>
        )
    }

}

export default SocialLogin