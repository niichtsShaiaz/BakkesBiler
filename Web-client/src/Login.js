import React, { Component } from "react";
import facade from "./apiFacade";
import { Col, Form, FormGroup, Label, Input, Row, Button } from 'reactstrap';

class Login extends Component{
    constructor(props) {
        super(props);
        this.state = { email: "", password: "" }
    }
    
    login = (evt) => {
        evt.preventDefault();
        facade.login(this.state.email, this.state.password);
    }
    onChange = (evt) => {
        this.setState({[evt.target.id]: evt.target.value})
    }
    render(){
        return(
            <Row>
                <Col sm="12" md={{ size: 8, offset: 2 }}>
                    <Form onSubmit={this.login} onChange={this.onChange}>
                        <FormGroup row>
                        <Label for="email" sm={2}>Email:</Label>
                            <Col sm={10}>
                                <Input type="email" name="email" id="email" placeholder="email"/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="password" sm={2}>Password:</Label>
                            <Col sm={10}>
                                <Input type="password" name="password" id="password" placeholder="********" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Button color="primary">Login</Button>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
        )
    }
}

export default Login;