import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import SocialLogin from './SocialLogin'
import AuthTabs from './AuthTabs'
import { Icon, Header } from 'semantic-ui-react'

class AuthModal extends React.Component {
    constructor(props) {
        super(props)

        this.state ={
            show:false
        }
    }

    render() {
        return(
            <>
            <style type="text/css">
            {`
                .modal-header{
                    text-align: center
                }
            `}
</style>
            <Button variant="outline-primary" onClick={()=>{this.setState({show:true})}}>Login/Signup</Button>
            <Modal show = {this.state.show}
                   onHide={() => this.setState({show:false})} 
            >
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
}

export default AuthModal