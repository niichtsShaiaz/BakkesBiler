import React, { Component } from "react"
import {
    HashRouter as Router,
    Route,
    Switch,
    NavLink
} from 'react-router-dom'

import { Nav, NavItem, Row, Col } from 'reactstrap';

import adminAddCar from "./adminAddCar";

const NoMatch = () => (
    <h1> No Match </h1>
)


class adminPage extends Component {
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
                                    <NavLink exact to="/adminPage"> AdminPage </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink exact to="/adminPage/addCar"> Add Car </NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                    </Row>

                </Router>

                <Router>
                    <Switch>
                        <Route exact path="/adminPage" render={() => <div>Admin Page</div>} />
                        <Route path="/adminPage/addCar"  component={adminAddCar}/>
                        <Route component={NoMatch} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default adminPage;