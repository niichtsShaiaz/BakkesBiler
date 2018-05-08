import React, { Component } from "react"

import { Button, Form, FormGroup, Label, Input, Nav, NavItem, NavLink, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
class adminPage extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <Form>
                <FormGroup Inline>
                    <Label for="make">Make: </Label>
                    <Input type="text" name="make" id="make" placeholder="Make" />
                </FormGroup>
                <FormGroup>
                    <Label for="model">Model: </Label>
                    <Input type="text" name="model" id="model" placeholder="Model" />
                </FormGroup>
                <FormGroup>
                    <Label for="year">Year: </Label>
                    <Input type="number" name="year" id="year" placeholder="Year" />
                </FormGroup>
                <FormGroup>
                    <Label for="regno">Regno: </Label>
                    <Input type="number" name="regno" id="regno" placeholder="Regno" />
                </FormGroup>
                <FormGroup>
                    <Label for="seats">Steats: </Label>
                    <Input type="number" name="steats" id="steats" placeholder="Steats" />
                </FormGroup>
                <FormGroup>
                    <Label for="doors">Doors: </Label>
                    <Input type="number" name="doors" id="doors" placeholder="Doors" />
                </FormGroup>
                <FormGroup>
                    <Label for="seats">Steats: </Label>
                    <Input type="number" name="steats" id="steats" placeholder="Steats" />
                </FormGroup>
                <FormGroup>
                    <Label for="gearType">Gear Type:</Label>
                    <Input type="select" name="gearType" id="gearType">
                        <option>MANUAL</option>
                        <option>AUTO</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="airconditon">Airconditon:</Label>
                    <Input type="select" name="gearType" id="gearType">
                        <option>Has Airconditon</option>
                        <option>Does Not Have Airconditon</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="location">Location:</Label>
                    <Input type="select" name="location" id="location">
                        <option>Cph (Copenhagen Airport)</option>
                        <option>Billund Lufthavn</option>
                        <option>Aalborg Lufthavn</option>
                        <option>Copenhagen City </option>
                        <option>Aarhus City </option>
                        <option>Odense</option>
                        <option>Herning</option>
                        <option>Roskilde</option>
                        <option>Esbjerg</option>
                        <option>Naestved</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="pricePerDay">Price/Day: </Label>
                    <Input type="number" name="pricePerDay" id="pricePerDay" placeholder="Price/Day" />
                </FormGroup>
                <Button>Add Car</Button>
            </Form>
        )
    }
}

export default adminPage;