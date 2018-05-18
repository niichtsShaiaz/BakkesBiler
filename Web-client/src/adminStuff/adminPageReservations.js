import React, { Component } from "react"

import { Table } from 'reactstrap';

const URL = "https://ezlinodev.com/cars/api/CarApi/";
const TESTURL = "http://localhost:8084/jwtbackend/api/CarApi/reservations"


function ListItem(props) {
    const reservation = props.reservation;
    return (
        <tr>
            <td>{reservation.companyTag}</td>
            <td>{reservation.customerMail}</td>
            <td>{reservation.fromDate}</td>
            <td>{reservation.toDate}</td>
            <td>{reservation.vId}</td>
        </tr>
    );
}


function ReservationList(props) {
    const reservations = props.reservations;
    const listItems = reservations.map((reservation, index) =>
        <ListItem key={index} reservation={reservation} />
    );
    return (
        <Table>
            <thead>
                <th>Company</th>
                <th>Customer mail</th>
                <th>From date</th>
                <th>To date</th>
                <th>Car id</th>
            </thead>
            <tbody>
                {listItems}
            </tbody>
        </Table>

        
    );
}

class adminPageReservations extends Component {
    constructor(props) {
        super();
        this.state = { reservations: [] };
    }

    componentDidMount() {
        this.getReservationsFromApi();
    }

    getReservationsFromApi() {
        fetch(TESTURL)
            .then(results => results.json())
            .then(data => this.setState({ reservations: data }))
    }



    render() {
        console.log(this.state.reservations)
        return (
            <div>
                <h1>Reservations</h1>
                <ReservationList reservations={this.state.reservations} />
            </div>
        )
    }
}

export default adminPageReservations;