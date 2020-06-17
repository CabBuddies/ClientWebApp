import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Button } from 'semantic-ui-react'

function SocialLogin(props){
return(
        <Container fluid="lg">
        <Row>
        <Col xs={3} sm={3}><Button color='facebook' icon='facebook' size='huge'/></Col>

        <Col xs={3} sm={3}><Button color='linkedin' icon='linkedin' size='huge'/></Col>

        <Col xs={3} sm={3}><Button color='twitter' icon='twitter' size='huge'/></Col>

        <Col xs={3} sm={3}><Button color='green' icon='google' size='huge'/></Col>

        </Row>
        </Container>
      )

}

export default SocialLogin