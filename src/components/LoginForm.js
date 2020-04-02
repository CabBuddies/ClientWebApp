import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { FormControl, FormLabel, FormControlLabel, InputLabel, FormHelperText, Box, Button, Checkbox, ButtonBase, OutlinedInput } from '@material-ui/core'
import { borders } from '@material-ui/system'
import { Form } from 'react-bootstrap'

// import userData from '../data/users'

/**
 * This component is for Login.
 */
class LoginForm extends React.Component {

    constructor(props) {
        super(props)

        // state of Login form
        this.state = {
            email: "",
            password: ""
        }
        
    }

    handleChange = (event) => {
        console.log(event.target.value)
        if(event.target.id === "email") 
            this.setState({email: event.target.value})
        else
            this.setState({password : event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        alert(`Login is in Development`)
    }

    render() {
        return(
            <Form>
                <FormLabel component="legend" >Login</FormLabel>
                <FormControl required = "true">
                    <InputLabel htmlFor="my-email">Email address</InputLabel>
                    <OutlinedInput id="my-input" aria-describedby="my-helper-text" />
                    <FormHelperText id="my-helper-text">We'll not share your Email.</FormHelperText>
                </FormControl>
                <br/>
                <FormControl required = "true">
                    <InputLabel htmlFor="my-password">Password</InputLabel>
                    <OutlinedInput id="my-input" aria-describedby="my-helper-text" />
                    <FormHelperText id="my-helper-text">Your Password is Encrypted.</FormHelperText>
                </FormControl>
                <br/>
                <FormControlLabel
                value="end"
                control={<Checkbox color="primary" />}
                label="Remember me"
                labelPlacement="end"
                />
                <br/>
                <ButtonBase>
                    <Button variant = "contained" color = "primary" >Sign in</Button>
                </ButtonBase>
                <br/>
                <Box component="span" display="block" border = {1} borderRadius="10%">
                    Already a User?
                    <Button href="#text-buttons" color="primary">
                        <Link to = "/registration">
                            Sign Up
                        </Link>
                    </Button>
                </Box>
            </Form>
        )
    }

}

export default LoginForm