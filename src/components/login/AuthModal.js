import React from 'react'
import { Modal } from 'react-bootstrap'
import SocialLogin from './SocialLogin'
import AuthTabs from './AuthTabs'
import { Icon, Header } from 'semantic-ui-react'

function AuthModal(props) {

    // const [show , setShow] = useState(false)
        return(
            <>
            <style type="text/css">
            {`
                .modal-header{
                    text-align: center
                }
            `}
            </style>
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
            </>
        )
}

export default AuthModal