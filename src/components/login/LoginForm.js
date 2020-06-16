import React,{useState} from 'react'
import { Form, Button, Container, Col, Row, InputGroup } from 'react-bootstrap'
import { Icon } from 'semantic-ui-react'

/**
 * This component is for Login.
 * 
 */


function LoginForm(props) {

    // hooks 
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [rememberMe,setRM] = useState(false)

    const handleChange = (event)=>{
        if(event.target.id === "email") {
            setEmail(event.target.value)
            // console.log(event.target.value)
        }
            
        else if(event.target.id === "password")
        {
            setPassword(event.target.value)
            // console.log(password)
        }
            

    }
    
    const handleSubmit = (event) =>{
        event.preventDefault()
        localStorage.setItem('rememberMe', rememberMe)
        if(rememberMe)
            localStorage.setItem('email', email)
        alert(`
        Login Details:
        Email: ${email}
        Password: Chupettamga..
        `)
    }
    
    const toggleRememberMe = (event) =>{
        const input = event.target
        const value = input.type === 'checkbox' ? input.checked : input.value
        setRM(value)
    }

        if(localStorage.getItem('email')) {
            return(<h1>You'll be redirected to home page</h1>)
        }
        return(
            <>
            <style type="text/css">
            {`
            .nav-tabs {
                margin-bottom: 1rem
            }
            .nav-tabs .nav-link{
                width:50%
            }
            .btn-group-lg>.btn, .btn-lg{
                border-radius: 20px
            }
            `}
            </style>
            <Container>
                <Form onSubmit = {handleSubmit}>
                    {/* Email Element */}
                <Form.Group controlId = "email">
                <InputGroup>
                <InputGroup.Prepend>
                    <Icon name="user outline" color="blue" size="large" />
                </InputGroup.Prepend>
                    <Form.Control type = "email" placeholder = "Enter email" required value = {email} onChange = {handleChange} />
                </InputGroup>
                </Form.Group>

                {/* Password Element */}
                <Form.Group controlId = "password">
                <InputGroup>
                <InputGroup.Prepend>
                    <Icon name="key" color="blue" size="large" />
                </InputGroup.Prepend>
                <Form.Control type = "password" placeholder = "Enter password" required value = {password}  onChange = {handleChange} />
                </InputGroup>
                </Form.Group>

                {/* CheckBox */}
                <Form.Group controlId = "rememberMe">
                    <Form.Check type = "checkbox" label = "Remember me"  name = "rememberMe" checked = {rememberMe} onChange = {toggleRememberMe} />
                </Form.Group>

                {/* Centered Button */}
                <Form.Group as={Row}>
                    <Col xs={{ span: 6, offset: 4 }}>
                    <Button type = "submit" variant = "primary" size = "lg">
                        Login
                    </Button>
                    </Col>
                </Form.Group>
                </Form>
            </Container>
            </>
            
        )

}



export default LoginForm