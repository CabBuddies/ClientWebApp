import React,{useState} from 'react'
import { Button } from 'react-bootstrap'
import AuthModal from '../login/AuthModal'
import QuillEditor from '../editor/QuillEditor'

function Home(props){
 const [show , setShow] = useState(false)
        return(
            <>
                <Button variant="outline-primary" onClick={ ()=>setShow(true ) }> Login/Signup</Button>
                <AuthModal show={show} onHide={() => setShow(false) }/>
                <QuillEditor/>
            </>
        )
}
export default Home