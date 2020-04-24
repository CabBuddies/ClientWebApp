import React from 'react'
import { Button } from 'react-bootstrap'
import AuthModal from '../login/AuthModal'
import QuillEditor from '../editor/QuillEditor'

class Home extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            show: false
        }
    }

    render()
    {
        return(
            <>
                <Button variant="outline-primary" onClick={ ()=>this.setState( { show:true } ) }> Login/Signup</Button>
                <AuthModal show={this.state.show} onHide={() => { this.setState( { show: false } ) } }/>
                <QuillEditor/>
            </>
        )
    }

}

export default Home