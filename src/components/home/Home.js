import { React, lazy } from 'react'
import { Button } from 'react-bootstrap'

const AuthModal = lazy(() => import('../login/AuthModal'))

export default class Home extends React.Component{
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
            <Button variant="outlined-primary" onClick={ ()=>this.setState( { show:true } ) }> Login/Signup</Button>
            <AuthModal show={this.state.show} onHide={() => { this.setState( { show: false } ) } }/>
            </>
        )
    }

}