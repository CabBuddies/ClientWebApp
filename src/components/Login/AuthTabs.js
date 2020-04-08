import React from 'react'
import { Tabs, Tab, Container } from 'react-bootstrap'
import RegistrationForm from './RegistrationForm'
import LoginForm from './LoginForm'

class AuthTabs extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <Container>
            <Tab.Container>
            <Tabs id = "auth-tab-container">
                <Tab eventKey = "registration" title = "Sign Up">
                    <RegistrationForm/>
                </Tab>
                <Tab eventKey = "login" title = "Log In">
                    <LoginForm/>
                </Tab>
            </Tabs>
            </Tab.Container>
            </Container>
        )
    }
}

export default AuthTabs