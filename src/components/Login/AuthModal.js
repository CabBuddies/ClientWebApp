import React from 'react'
import { Modal } from 'react-bootstrap'
import SocialLogin from './SocialLogin'
import AuthTabs from './AuthTabs'

class AuthModal extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <Modal>
                <Modal.Header>
                    <AuthTabs />
                </Modal.Header>
                <Modal.Body>

                </Modal.Body>
                <Modal.Footer>
                    <SocialLogin />
                </Modal.Footer>
            </Modal>
        )
    }
}

export default AuthModal