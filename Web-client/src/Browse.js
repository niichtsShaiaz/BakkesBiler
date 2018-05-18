import React, { Component } from "react";
import facade from "./apiFacade";
import sort from "./Sort";
import search from "./Search";
import { Nav, NavItem, Row, Col, FormGroup, Label, Input, Button, Jumbotron } from 'reactstrap';
import {
    HashRouter as Router,
    Route,
    Switch,
    NavLink,
    Link
} from 'react-router-dom'

class ShowCars extends Component{
    constructor(props) {
        super(props);
        this.state = {
            AllCars: [],
            list: [],
            doors: "",
            seats: "",
            make: "",
            selectedCars: [],
        };
        this.handleChange = this.handleChange.bind(this);
        this.ResetFilters = this.ResetFilters.bind(this);
        this.Onsubmit = this.Onsubmit.bind(this);
    }
    componentDidMount() {
        facade.fetchAllCars().then(res => this.setState({ AllCars: res }));
        facade.fetchAllCars().then(res => this.setState({ list: res }));

    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    Onsubmit() {
        let listTest = this.state.AllCars;
        if (this.state.doors != "") {
            console.log(this.state.doors);
           // var list2 = sort.sortCarsByDoors(parseInt(this.state.doors), this.state.list);
            //t his.setState({ list: list2})
            listTest = sort.sortCarsByDoors(parseInt(this.state.doors), listTest);
            this.setState({list: listTest});
        }
        if (this.state.seats != "") {
            listTest = sort.sortCarsBySeats(parseInt(this.state.seats), listTest);
            this.setState({ list: listTest })
        }
        if (this.state.make != "") {
            listTest = sort.sortCarsByIsMake(this.state.make, listTest);
            this.setState({ list: listTest })
        }

    }
    ResetFilters(event) {
        this.setState({ list: this.state.AllCars })
        this.refs.form.reset();
    }

    search(event){
        if(event.target.value == "")
            this.setState({ list: this.state.AllCars});
        else
            this.setState({ list: search.filterCarsBySearch(event.target.value, this.state.AllCars)});
    }

    /*render() {

        var cars = this.state.list;
        console.log(cars);
        var linkTable = cars.map((car) => {
            return (
                <Jumbotron>
                    <Row>
                        <Col xs="6"><img src={car.picture} width="100%" alt="" /></Col>
                        <Col xs="6">
                            <h2>{car.category}</h2>
                            <p><b>{car.make} {car.model}</b></p>
                            <p><b>Krav til chaufføren:</b></p>
                            <p>- Alderskrav: 21 (For chauffører under 25 år vil der blive tillagt et gebyr for ung chauffør).</p>
                            <p>- Gyldigt kørekort udstedt minimum 6 måneder før lejeperiodens start.</p>
                            <p>- Mindst 1 kreditkort kræves som betalingsmiddel for billejen.</p>
                            <p><b>{car.seats} personer</b>, <b>{car.doors} døre</b>, <b>{car.gear}</b></p>
                            
                        </Col>
                    </Row>
                </Jumbotron>
            )
        });

        return (
            <container>
                <div className="">
                    <div className="col-sm-2">
                        <form onChange={this.handleChange} ref="form">
                            <FormGroup>
                                <Label for="BrandFilter">Brand</Label>
                                <Input type="select" name="BrandFilter" id="BrandFilter" onChange={e => this.setState({ make: e.target.value })}>
                                    <option></option>
                                    <option>Toyota</option>
                                    <option>Opel</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="DoorFilter">Doors</Label>
                                <Input type="select" name="DoorFilter" id="DoorFilter" onChange={e => this.setState({ doors: e.target.value })}>
                                    <option></option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="SeatFilter">Seats</Label>
                                <Input type="select" name="SeatFilter" id="SeatFilter" onChange={e => this.setState({ seats: e.target.value })}>
                                    <option></option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input>
                            </FormGroup>
                            <Button onClick={this.Onsubmit}>Submit</Button>
                        </form>
                        <Button onClick={this.ResetFilters} >Reset Filters</Button>
                    </div>
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8">
                        <Input type="text" name="search" id="search" placeholder="Search" onChange={this.search.bind(this)}/>
                        <div className="well well-sm"> <h3> List of Cars</h3> </div>
                        {linkTable}
                        <br />
                        <Link to="/" className="btn btn-info btn-md">Back</Link>
                    </div>
                    <div class="col-sm-2"></div>
                </div>
            </container>

        )
    }*/

    //-------------------------------------------------------------------------------------------------------------------

    handleCompareSave(id) {
        // when a car is selected, add it to the selectedCars state propery
        const { list, selectedCars } = this.state;
        const selectedCarAsArray = list.filter(car => car.id === id);

        this.setState({
            selectedCars: [...selectedCars, ...selectedCarAsArray]
        });
    }

    hasIn(list, car)
    {
        var _ = require('lodash');
        let newList = _.filter(list, {"id": car.id})
        if(newList.length > 0)
            return true;
        else
            return false;
    }

    handleRemoveCarFromComparison(id) {
        const { selectedCars } = this.state;
        const selectedCarAsArray = selectedCars.filter(car => car.id !== id); // remove the car in question from comparison

        this.setState({
            selectedCars: selectedCarAsArray
        });
    }

    generateJSXForCar(car) {
        const { list, selectedCars } = this.state;
        const compareDisabled = this.hasIn(selectedCars, car);

        return (
            <Jumbotron>
                    <Row>
                        <Col xs="6"><img src={car.picture} width="100%" alt="" /></Col>
                        <Col xs="6">
                            <h2>{car.category}</h2>
                            <p><b>{car.make} {car.model}</b></p>
                            <p><b>Krav til chaufføren:</b></p>
                            <p>- Alderskrav: 21 (For chauffører under 25 år vil der blive tillagt et gebyr for ung chauffør).</p>
                            <p>- Gyldigt kørekort udstedt minimum 6 måneder før lejeperiodens start.</p>
                            <p>- Mindst 1 kreditkort kræves som betalingsmiddel for billejen.</p>
                            <p><b>{car.seats} personer</b>, <b>{car.doors} døre</b>, <b>{car.gear}</b></p>
                            <p><b>pris per dag: {car.priceperday} kr.</b></p>
                            <p><b>lokation: {car.location}</b></p>
                            <Link to='/details/{this.state.regno}' class="btn btn-success">Lej</Link>
                            <button className="btn btn-success" onClick={() => this.handleCompareSave(car.id)}
                        disabled={compareDisabled}>Compare</button>
                        </Col>
                    </Row>
                </Jumbotron>
        )
    }

    generateJSXForComparedCar(car) {
        return (
            <Col xs="6">
                <Jumbotron>
                    <Row>
                        <Col xs="6"><img src={car.picture} width="100%" alt="" /></Col>
                        <Col xs="6">
                            <h2>{car.category}</h2>
                            <p><b>{car.make} {car.model}</b></p>
                            <p><b>Krav til chaufføren:</b></p>
                            <p>- Alderskrav: 21 (For chauffører under 25 år vil der blive tillagt et gebyr for ung chauffør).</p>
                            <p>- Gyldigt kørekort udstedt minimum 6 måneder før lejeperiodens start.</p>
                            <p>- Mindst 1 kreditkort kræves som betalingsmiddel for billejen.</p>
                            <p><b>{car.seats} personer</b>, <b>{car.doors} døre</b>, <b>{car.gear}</b></p>
                            <button className="btn btn-success" onClick={() => this.handleRemoveCarFromComparison(car.id)}>Remove this car from comparison</button>
                        </Col>
                    </Row>
                </Jumbotron>
            </Col>
        );
    }

    render() {
        const { list, selectedCars } = this.state;
            //const compareDisabled = !!selectedCars.filter(selectedCar => selectedCar.id.includes(car.id))
        var compares = list.map((car) => {
            return (
                <div>
                    {this.generateJSXForCar(car)}
                </div>
            );
        });

        return (
            <div>
               <h3 className="h3"> Cars being compared:</h3>
               <Row>
                    {selectedCars.map(selectedCar => this.generateJSXForComparedCar(selectedCar))}
                </Row>

                <hr/>
                <div>
                    <form onChange={this.handleChange} ref="form">
                        <FormGroup>
                            <Label for="BrandFilter">Brand</Label>
                            <Input type="select" name="BrandFilter" id="BrandFilter" onChange={e => this.setState({ make: e.target.value })}>
                                <option></option>
                                <option>Toyota</option>
                                <option>Opel</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="DoorFilter">Doors</Label>
                            <Input type="select" name="DoorFilter" id="DoorFilter" onChange={e => this.setState({ doors: e.target.value })}>
                                <option></option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="SeatFilter">Seats</Label>
                            <Input type="select" name="SeatFilter" id="SeatFilter" onChange={e => this.setState({ seats: e.target.value })}>
                                <option></option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Input>
                        </FormGroup>
                        <Button onClick={this.Onsubmit}>Submit</Button>
                    </form>
                    <Button onClick={this.ResetFilters} >Reset Filters</Button>
                </div>
               <h3 className="h3"> All cars:</h3>
                {compares}
            </div>
        );
    }
}

export default ShowCars;