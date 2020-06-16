import React,{useState} from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

function RegistrationForm(props){
    // yet to change
    const [fields, setField] = useState({firstName: '',lastName: '',email: '',phoneNumber: '',password: ''})

    const handleChange = (event) => {
        const value = event.target.value;
        setField({
          ...fields,
          [event.target.id]: value
        });
      }

    const handleSubmit = (event) => {
        event.preventDefault()
        alert(`
        Registration Details:
        FirstName: ${fields.firstName}
        LastName: ${fields.lastName}
        Email: ${fields.email}
        Password: Chupettamga..
        `)
    }
        return(
            <>
            <style type="text/css">
            {`
            .form {
            width: "50%"
            margin: auto
            }`
            }
            </style>
            <Container> 
                <Form onSubmit = {handleSubmit}>
                    {/* Form row for First name and Last name */}
                    <Form.Row required>
                        <Form.Group controlId = "firstName" as = {Col} >
                        <Form.Control type = "text" placeholder = "First Name" required value = {fields.firstName} onChange = {handleChange} />
                        </Form.Group>
                        <Form.Group controlId = "lastName" as = {Col} >
                        <Form.Control type = "text" placeholder = "Last Name" required value = {fields.lastName} onChange = {handleChange} />
                        </Form.Group>
                    </Form.Row>

                    {/* Email Element */}
                    <Form.Group controlId = "email" required>
                        <Form.Control type = "email" placeholder = "Enter Email" required value = {fields.email} onChange = {handleChange} />
                    </Form.Group>

                    {/* Password Element */}
                    <Form.Group controlId = "password" required>
                        <Form.Control type = "password" placeholder = "Enter Password" required value = {fields.password} onChange = {handleChange} />
                    </Form.Group>

                    {/* Phone Number Element */}
                    <Form.Group controlId = "phoneNumber">
                        <Form.Control type = "tel" placeholder = "Enter Phone Number" value = {fields.phoneNumber} onChange = {handleChange} />
                    </Form.Group>
                    <Form.Group as={Row}>
                    <Col xs={{ span: 6, offset: 4 }}>
                    <Button type = "submit" variant = "primary" size = "lg">
                        Sign up
                    </Button>
                    </Col>
                    </Form.Group>
                </Form>
            </Container>
            </>
        )
}

export default RegistrationForm