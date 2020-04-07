import React from 'react'
import { ListGroupItem, Button } from 'react-bootstrap'

class SocialLoginItem extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <ListGroupItem as = "li">
                <Button>
                    {this.props.accountType}
                </Button>
            </ListGroupItem>
        )
    }

}

export default SocialLoginItem