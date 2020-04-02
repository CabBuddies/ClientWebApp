import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { FormLabel, FormControlLabel, Box, Button, Checkbox, ButtonBase, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
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

    tfstyles = makeStyles((theme) =>({
        tf:{
            color:'blue',
            margin:theme.spacing(1),
            width: '25ch'
        }
            
    }))
    

    render() {
        const classes = this.tfstyles
        return(
            
            <form className = {classes.tf}>
                <FormLabel component="legend" >Login</FormLabel>
                <br/>
                    <TextField 
                        required
                        id="my-input" 
                        aria-describedby="my-helper-text" 
                        label="Email Address" 
                        variant = "outlined"
                    />
                <br/><br/>
                    <TextField 
                        required
                        id="my-input" 
                        type="password"
                        label = "password"
                        variant = "outlined"
                        />
                <br/>
                <FormControlLabel
                value="end"
                control={<Checkbox color="primary" />}
                label="Remember me"
                labelPlacement="end"
                />
                <br/>
                <ButtonBase>
                    <Button variant = "contained" color = "primary" href = {this.handleSubmit} >Sign in</Button>
                </ButtonBase>
                <br/>
                <Box component="span" display="block" border = {1} borderRadius="10%">
                    Already a User?
                    <Button  href="#text-buttons" color="primary">
                        <Link to = "/registration">
                            Sign Up
                        </Link>
                    </Button>
                </Box>
            </form >
        )
    }

}

export default LoginForm