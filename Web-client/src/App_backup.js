import React, { Component } from "react"
import facade from "./apiFacade";
import jwt_decode from 'jwt-decode';
import Sort from "./Sort";
import {
    Route,
    HashRouter,
    Switch,
    Link
} from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input, Nav, NavItem, NavLink, Row, Col, Breadcrumb, BreadcrumbItem, Jumbotron, Container } from 'reactstrap';

const Home = () => (
    <div>
        Welcome!
    </div>
)

class Header extends Component {

    render() {
        return (
            <Row>
                <Col>
                    <Nav tabs>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/ShowCars">Browse</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Filter">Filter</NavLink>
                        </NavItem>
                    </Nav>
                </Col>
            </Row>
        )
    }
}
class Browse extends Component {
    constructor(props) {
        super(props)
    let allcars =fetch('https://ezlinodev.com/cars/api/CarApi/')
    .then(function(response) { return response.json(); })
    .then(function(json) {
    console.log(json)
    })
}
    render() {
        return (
            <Container>
                <Row>
                    <Col xs="6" sm="4">car1</Col>
                    <Col xs="6" sm="4">car2</Col>
                    <Col sm="4"></Col>
                </Row>

            </Container>
        )

    }
}

class ShowCars extends Component {
    constructor(props) {
      super(props);
      this.state = { fetchURL: props.fetchURL, dataFromServer: { cars: []} };
    }
    componentDidMount() {
      facade.fetchCars(this.state.fetchURL).then(res => this.setState({ dataFromServer: res }));
    }
    render() {
      var cars = this.state.dataFromServer.cars;
      var linkTable = cars.map((car) => {
        return (
          <tr  scope="row" key={car.regno}>
            <td>{car.make}</td>
            <td>{car.model}</td>         
            <td>{car.location}</td>
            <td>{car.priceperday}</td>
            <td><Link to={`details/${car.regno}`} class="btn btn-success">Show Details</Link></td>
            <td><Link to="/showcars" class="btn btn-success">Book</Link></td>
            {/* <td><Link to={`booking/${car.regno}`} class="btn btn-success">Book</Link></td> */}
          </tr>
        )
      });
  
      return (
        <div class="row">
          <div class="col-sm-2"></div>
          <div class="col-sm-8">
            <div class="well well-sm"> <h3> List of Cars</h3> </div>
            <table class="table" key="tableList">
              <tbody>
                <tr>               
                  <th scope="col">Make</th>
                  <th scope="col">Model</th>
                  <th scope="col">Location</th>
                  <th scope="col">PricePerDay</th>
                  <th scope="col">Details</th>
                  <th scope="col">Booking</th>
                </tr>
                {linkTable}
              </tbody>
            </table>
            <br />
  
            <Link to="/" class="btn btn-success">Back</Link>
  
          </div>
          <div class="col-sm-2"></div>
        </div>
  
      )
    }
  }

class App extends Component {
    constructor(props) {
        
            
        super(props);
    }


    render() {
        return (
            <div>
                <Header></Header>
                <ShowCars></ShowCars>
            </div>
        )
    }
}
export default App;