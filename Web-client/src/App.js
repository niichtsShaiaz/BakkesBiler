import React, { Component } from "react"
import {
    HashRouter as Router,
    Route,
    Switch,
    NavLink,
    Link
} from 'react-router-dom'
import facade from "./testing/apiFacadeTest";
import sort from "./Sort";
import { Nav, NavItem, Row, Col, Container, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, ButtonDropdown, FormGroup, Label, Input, Button } from 'reactstrap';

const NoMatch = () => (
    <h1> No Match </h1>
)
const Home = () => (
    <div>
        Welcome!
  </div>
)

class RentCar extends Component {
    constructor(props) {
        super(props);
        this.state = { location: "Alle", categori: "Alle" }

        this.handleChangeLocation = this.handleChangeLocation.bind(this);
        this.handleChangeCategori = this.handleChangeCategori.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChangeLocation(event) {
        this.setState({ location: event.target.value });
        if (event.target.value == "All") {
            this.props.setURL("");
        } else {
            this.props.setURL("?location=" + event.target.value);
        }
    }
    handleChangeCategori(event) {
        this.setState({ categori: event.target.value });
        if (event.target.value == "All") {
            this.props.setURL("");
        } else {
            this.props.setURL("?category=" + event.target.value);
        }
    }

    handleSubmit(event) {
        alert('submitted: ' + 'loca: ' + this.state.location + ", kate: " + this.state.categori);
        event.preventDefault();
    }

    render() {
        return (
            <div><div class="row">
                <div class="col-sm-5"> </div>
                <div class="col-sm-3">
                    <form>
                        <div class="form group">
                            <h1>Welcome</h1>
                        </div>
                    </form>
                </div>
                <div class="col-sm-4"> </div>
            </div>

                <div class="row">
                    <div class="col-sm-5"> </div>
                    <div class="col-sm-3">
                        <form>
                            <div class="form group">
                                <Link to="/showcars" class="btn btn-info btn-lg">Show All Cars</Link>
                            </div>
                        </form>
                    </div>
                    <div class="col-sm-4"> </div>
                </div>

                <div class="form-group">
                    &nbsp;
        </div>

            </div>
        )
    }
}

class ShowCars extends Component {
    constructor(props) {
        super(props);
        this.state = {
            AllCars: [],
            list: [],
            doors: "",
            seats: "",
            make: "",
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
        this.setState({ doors: event.target.value });
    }

    Onsubmit() {
        if (this.state.doors != "") {
            var list2 = sort.sortCarsByDoors(parseInt(this.state.doors), this.state.list);
            this.setState({ list: list2 })
        }
        if (this.state.seats != "") {
            var list2 = sort.sortCarsBySeats(parseInt(this.state.seats), this.state.list);
            this.setState({ list: list2 })
        }
        if (this.state.make != "") {
            console.log(this.state.make);
            var list2 = sort.sortCarsByIsMake(this.state.make, this.state.list);
            console.log(list2);
            this.setState({ list: list2 })
        }

    }
    ResetFilters(event) {
        this.setState({ list: this.state.AllCars })
        this.refs.form.reset();
    }
    render() {

        var cars = this.state.list;
        console.log(cars);
        var linkTable = cars.map((car) => {
            return (
                <tr scope="row" key={car.regno}>
                    <td>{car.make}</td>
                    <td>{car.model}</td>
                    <td>{car.location}</td>
                    <td>{car.priceperday}</td>
                    <td><Link to={`details/${car.regno}`} class="btn btn-success">Show Details</Link></td>
                    <td><Link to="/showcars" class="btn btn-success">Book</Link></td>
                </tr>
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
                        <div className="well well-sm"> <h3> List of Cars</h3> </div>
                        <table className="table" key="tableList">
                            <tbody>
                                <tr>
                                    <th scope="col">Make</th>
                                    <th scope="col">Model</th>
                                    <th scope="col">Location</th>
                                    <th scope="col">Price Per Day</th>
                                    <th scope="col">Details</th>
                                    <th scope="col">Booking</th>
                                </tr>
                                {linkTable}
                            </tbody>
                        </table>
                        <br />

                        <Link to="/" className="btn btn-info btn-md">Back</Link>

                    </div>
                    <div class="col-sm-2"></div>
                </div>
            </container>

        )
    }
}

class CarDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { fetchURL: props.fetchURL, dataFromServer: {}, regno: props.match.params.regno };
    }
    componentDidMount() {
        facade.fetchSingleCar(this.state.regno).then(res => this.setState({ dataFromServer: res }));
    }
    render() {
        var car = this.state.dataFromServer;

        return (
            <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-8">
                    <div className="well well-sm"> <h3> Car Details</h3> </div>
                    <img src={car.logo} width="100px" height="100px" alt="" />
                    <h2>{car.company}</h2>

                    <table className="table" key="tableList">
                        <tbody>
                            <tr>
                                <th scope="col">Category</th>
                                <th scope="col">Make</th>
                                <th scope="col">Model</th>
                                <th scope="col">Year</th>
                                <th scope="col">Regno</th>
                                <th scope="col">Seats</th>
                                <th scope="col">Doors</th>
                                <th scope="col">Gear</th>
                                <th scope="col">Aircondition</th>
                                <th scope="col">Location</th>
                                <th scope="col">PricePerDay</th>
                                <th scope="col">Booking</th>
                            </tr>
                            <tr scope="row" key={car.regno}>
                                <td>{car.category}</td>
                                <td>{car.model}</td>
                                <td>{car.make}</td>
                                <td>{car.year}</td>
                                <td>{car.regno}</td>
                                <td>{car.seats}</td>
                                <td>{car.doors}</td>
                                <td>{car.gear}</td>
                                <td>{"" + car.aircondition}</td>
                                <td>{car.location}</td>
                                <td>{car.priceperday}</td>
                                {/* <td><Link to={`booking/${car.regno}`} class="btn btn-success">Book</Link></td> */}
                                <td><Link to='/details/{this.state.regno}' class="btn btn-success">Book</Link></td>
                            </tr>

                        </tbody>
                    </table>

                    <img src={car.picture} width="30%" height="30%" alt="" />

                    <br /><br />



                    <Link to="/showcars" class="btn btn-success">Back</Link>

                </div>
                <div class="col-sm-2"></div>
            </div>

        )
    }
}

class Header extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                <Router>
                    <Row>
                        <Col>
                            <Nav Tabs>

                                {/* <a class="navbar-brand">CarMondo</a>*/}
                                <NavItem>
                                    <NavLink exact to="/"> Home </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink exact to="/showcars"> Browse </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink exact to="/filter"> Filter </NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                    </Row>

                </Router>
            </div>
        )
    }
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { loggedIn: false, fetchURL: "" }
    }
    setURL = (url) => {
        this.setState({ fetchURL: url });
        console.log(url);
    }
    render() {
        return (
            <div>
                <div>
                    <Header />

                    <Router>
                        <Switch>
                            <Route exact path="/" render={() => <RentCar setURL={this.setURL} />} />
                            <Route path="/showcars" render={() => <ShowCars fetchURL={this.state.fetchURL} />} />
                            <Route path="/details/:regno" render={(props) => <CarDetails {...props} />} />
                            <Route component={NoMatch} />
                        </Switch>
                    </Router>
                </div>

                <div class="row">
                    <br />
                    <div class="col-md-5"></div>
                    <div class="col-md-5"></div>
                </div>
            </div>
        )
    }
}

export default App;
