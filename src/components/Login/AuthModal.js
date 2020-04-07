import React from 'react'
import { Modal, ModalTitle } from 'react-bootstrap'
import SocialLogin from './SocialLogin'
import AuthTabs from './AuthTabs'

class AuthModal extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <Modal center = "true" size = "sm">
                <ModalTitle>CabBuddies</ModalTitle>
                <AuthTabs />
                <Modal.Footer>
                    <SocialLogin />
                </Modal.Footer>
            </Modal>
        )
    }
}

export default AuthModal