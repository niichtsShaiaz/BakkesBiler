import React, { Component } from "react"

import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';


const URL = "https://ezlinodev.com/cars/api/CarApi/";
const TESTURL = "http://localhost:8084/jwtbackend/api/CarApi"

class adminAddCar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }



    addCarToApi = (event) => {

        fetch(TESTURL, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({

                "make": this.state.make,
                "model": this.state.model,
                "year": this.state.year,
                "seats": this.state.seats,
                "doors": this.state.doors,
                "gearType": this.state.gearType,
                "aircondition": this.state.aircondition,
                "location": this.state.location,
                "pricePerDay": this.state.pricePerDay,
                "reservations": [],
                "picture": this.state.picture,
                "category": this.state.catagory,
                "regno": this.state.regno,
                "isavailable": true
            })
        })
    }

    handleMake(event) {
        this.setState({ make: event.target.value })
    }

    handleModel(event) {
        this.setState({ model: event.target.value })
    }

    handleYear(event) {
        this.setState({ year: event.target.value })
    }

    handleRegno(event) {
        this.setState({ regno: event.target.value })
    }

    handleSeats(event) {
        this.setState({ seats: event.target.value })
    }

    handleDoors(event) {
        this.setState({ doors: event.target.value })
    }

    handleGearType(event) {
        this.setState({ gearType: event.target.value })
    }

    handleAircondition(event) {
        this.setState({ aircondition: event.target.value })
    }

    handleLocation(event) {
        this.setState({ location: event.target.value })
    }

    handlePricePerDay(event) {
        this.setState({ pricePerDay: event.target.value })
    }

    handlePicture(event) {
        this.setState({ picture: event.target.value })
    }

    handleCatagory(event) {
        this.setState({ catagory: event.target.value })
    }

    render() {
        return (


            <Row>
                <Col sm="12" md={{ size: 8, offset: 2 }}>
                    <Form onSubmit={this.addCarToApi}>
                        <FormGroup>
                            <Label for="make">Make: </Label>
                            <Input type="text" name="make" placeholder="make" value={this.state.make} onChange={this.handleMake.bind(this)} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="model">Model: </Label>
                            <Input type="text" name="model" id="model" placeholder="model" value={this.state.model} onChange={this.handleModel.bind(this)} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="make">Catagory: </Label>
                            <Input type="text" name="category" placeholder="category" value={this.state.category} onChange={this.handleCatagory.bind(this)} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="year">Year: </Label>
                            <Input type="number" name="year" id="year" placeholder="Year" value={this.state.year} onChange={this.handleYear.bind(this)} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="regno">Regno: </Label>
                            <Input type="number" name="regno" id="regno" placeholder="Regno" value={this.state.regno} onChange={this.handleRegno.bind(this)} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="seats">Seats: </Label>
                            <Input type="number" name="seats" id="seats" placeholder="Seats" value={this.state.seats} onChange={this.handleSeats.bind(this)} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="doors">Doors: </Label>
                            <Input type="number" name="doors" id="doors" placeholder="Doors" value={this.state.doors} onChange={this.handleDoors.bind(this)} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="gearType">Gear Type:</Label>
                            <Input type="select" name="gearType" id="gearType" value={this.state.gearType} onChange={this.handleGearType.bind(this)}>
                            <option></option>
                                <option value="MANUAL">MANUAL</option>
                                <option value="AUTO">AUTO</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="airconditon">Airconditon:</Label>
                            <Input type="select" name="aircondition" id="airconditon" value={this.state.aircondition} onChange={this.handleAircondition.bind(this)}>
                                <option></option>
                                <option value={true}>Has Airconditon</option>
                                <option value={false}>Does Not Have Airconditon</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="location">Location:</Label>
                            <Input type="select" name="location" id="location" value={this.state.location} onChange={this.handleLocation.bind(this)}>
                                <option></option>
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
                            <Input type="number" name="pricePerDay" id="pricePerDay" placeholder="Price/Day" value={this.state.pricePerDay} onChange={this.handlePricePerDay.bind(this)} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="make">Picture: </Label>
                            <Input type="text" name="picture" placeholder="picture" value={this.state.picture} onChange={this.handlePicture.bind(this)} />
                        </FormGroup>
                        <Button color="primary" type="submit">Add Car</Button>
                    </Form>
                </Col>
            </Row>

        )
    }
}

export default adminAddCar;