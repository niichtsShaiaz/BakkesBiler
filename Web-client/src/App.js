import React, { Component } from "react"
import {
    HashRouter as Router,
    Route,
    Switch,
    NavLink,
    Link,
    Redirect 
} from 'react-router-dom'
import facade from "./apiFacade";
import sort from "./Sort";
import search from "./Search";
import ShowCars from "./Browse";
import Login from "./Login";
import { Nav, NavItem, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';

import adminPage from "./adminStuff/adminPage";
const NoMatch = () => (
    <h1> No Match </h1>
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
        if (event.target.value === "All") {
            this.props.setURL("");
        } else {
            this.props.setURL("?location=" + event.target.value);
        }
    }
    handleChangeCategori(event) {
        this.setState({ categori: event.target.value });
        if (event.target.value === "All") {
            this.props.setURL("");
        } else {
            this.props.setURL("?category=" + event.target.value);
        }
    }

    handleSubmit(event) {
        alert("submitted: " + "loca: " + this.state.location + ", kate: " + this.state.categori);
        event.preventDefault();
    }

    render() {
        return (
            <div><div className="row">
                <div className="col-sm-5"> </div>
                <div className="col-sm-3">
                    <form>
                        <div className="form group">
                            <h1>Welcome</h1>
                        </div>
                    </form>
                </div>
                <div className="col-sm-4"> </div>
            </div>

                <div className="row">
                    <div className="col-sm-5"> </div>
                    <div className="col-sm-3">
                        <form>
                            <div className="form group">
                                <Link to="/showcars" className="btn btn-info btn-lg">Show All Cars</Link>
                            </div>
                        </form>
                    </div>
                    <div className="col-sm-4"> </div>
                </div>

                <div className="form-group">
                    &nbsp;
        </div>

            </div>
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

    loginLogoutMenu()
    {
        if(facade.loggedIn())
            return(<NavItem>
                <NavLink exact to="/"> Logout </NavLink>
            </NavItem>);
        else
            return(<NavItem>
                <NavLink exact to="/Login"> Login </NavLink>
            </NavItem>);
    }

    render() {
        return (
            <div>
                <Router>
                    <Row>
                        <Col>
                            <Nav tabs>

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
                                <NavItem>
                                    <NavLink exact to="/compare"> Compare </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink exact to="/adminPage"> (Admin Page) </NavLink>
                                </NavItem>
                                {this.loginLogoutMenu()}
                            </Nav>
                        </Col>
                    </Row>

                </Router>
            </div>
        )
    }
}

class Compare extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataFromServer: [],
            selectedCars: []
        };
    }
    componentDidMount() {
        facade.fetchAllCars().then(res => this.setState({ dataFromServer: res }));

    }
    handleCompareSave(id) {
        // when a car is selected, add it to the selectedCars state propery
        const { dataFromServer, selectedCars } = this.state;
        const selectedCarAsArray = dataFromServer.filter(car => car.id === id);

        this.setState({
            selectedCars: [...selectedCars, ...selectedCarAsArray]
        });
    }

    handleRemoveCarFromComparison(id) {
        const { selectedCars } = this.state;
        const selectedCarAsArray = selectedCars.filter(car => car.id !== id); // remove the car in question from comparison

        this.setState({
            selectedCars: selectedCarAsArray
        });
    }

    generateJSXForCar(car) {
        return <div>



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

                    </tr>

                </tbody>
            </table>

            <img src={car.picture} width="30%" height="30%" alt="" />


        </div>;
    }

    generateJSXForComparedCar(car) {
        return (<div class="car-being-compared">
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

                    </tr>

                </tbody>
            </table>
            <div>  <img src={car.picture} width="30%" height="30%" alt="" /></div>
            <div>
                <button className="btn btn-success" onClick={() => this.handleRemoveCarFromComparison(car.id)}>
                    Remove this car from comparison</button>
            </div>
        </div>);
    }

    render() {
        const { dataFromServer, selectedCars } = this.state;

        var compares = dataFromServer.map((car) => {
            const compareDisabled = !!selectedCars.find(selectedCar => selectedCar.id === car.id);

            return (
                <div>
                    {this.generateJSXForCar(car)}
                    <button className="btn btn-success" onClick={() => this.handleCompareSave(car.id)}
                        disabled={compareDisabled}>Compare</button>
                </div>
            );
        });

        return (
            <div>
                <h3 className="h3"> Cars being compared:</h3>
                <div className="compared-cars-container">
                    {selectedCars.map(selectedCar => this.generateJSXForComparedCar(selectedCar))}
                </div>

                <hr />
                <h3 className="h3"> All cars:</h3>
                {compares}
            </div>
        );
    }
}

const Logout = () =>{
    facade.logout();
    return <Redirect push to="/login" />;
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
                            <Route path="/filter" render={() => <filter fetchURL={this.state.fetchURL} />} />
                            <Route path="/compare" render={() => <Compare fetchURL={this.state.fetchURL} />} />
                            <Route path="/adminPage" component={adminPage} />
                            <Route path="/login" component={Login} />
                            <Route component={NoMatch} />
                        </Switch>
                    </Router>
                </div>

                <div className="row">
                    <br />
                    <div className="col-md-5"></div>
                    <div className="col-md-5"></div>
                </div>
            </div>
        )
    }
}

export default App;
