import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import RegistrationForm from './RegistrationForm'
import LoginForm from './LoginForm'

class AuthTabs extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <Tabs id = "auth-tab-container">
                <Tab eventKey = "registration" title = "Sign Up">
                    <RegistrationForm/>
                </Tab>
                <Tab eventKey = "login" title = "Log In">
                    <LoginForm/>
                </Tab>
            </Tabs>
        )
    }
}

export default AuthTabs