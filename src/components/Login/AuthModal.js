import React from 'react'
import { Modal,Button } from 'react-bootstrap'
import SocialLogin from './SocialLogin'
import AuthTabs from './AuthTabs'

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
            <Button variant="outline-primary" onClick={()=>{this.setState({show:true})}}>Login/Signup</Button>
            <Modal show = {this.state.show}
                   onHide={() => this.setState({show:false})} 
            >
                <Modal.Header closeButton>
                    <h1>Login/Signup</h1>
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