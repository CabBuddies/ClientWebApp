import React from 'react'
import { Modal } from 'react-bootstrap'
import SocialLogin from './SocialLogin'
import AuthTabs from './AuthTabs'
import { Icon, Header } from 'semantic-ui-react'

function AuthModal(props) {
        return(
            // ... spread operator to add props from parent component and new properties
            <Modal {...props} scrollable="true"> 
                <Modal.Header closeButton>
                    <Header as='h1' textAlign="center">
                        <Icon name="car" color="blue" size="big" />
                        <Header.Content>CabBuddies</Header.Content>
                    </Header>
                </Modal.Header>
                <Modal.Body>
                   <AuthTabs />
                </Modal.Body>
                <Modal.Footer>
                    <SocialLogin />
                </Modal.Footer>
            </Modal>

        )
}

export default AuthModal