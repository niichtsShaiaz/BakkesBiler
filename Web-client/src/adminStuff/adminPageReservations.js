import React, { Component } from "react"

const URL = "https://ezlinodev.com/cars/api/CarApi/";
const TESTURL = "http://localhost:8084/jwtbackend/api/CarApi/reservations"


function ListItem(props) {
    const reservation = props.reservation;
    return (
      <li>
        {reservation.customerMail}
      </li>
    );
  }


function ReservationList(props) {
    const reservations = props.reservations;
    const listItems = reservations.map((reservation, index) =>
      <ListItem key={index} reservation={reservation}/>
    );
    return (
      <ul>{listItems}</ul>
    );
  }

class adminPageReservations extends Component 
{
    constructor(props){
        super();
        this.state = {reservations: []};
    }

    componentDidMount()
    {
        this.getReservationsFromApi();
    }

    getReservationsFromApi()
    {
        fetch(TESTURL)
        .then(results => results.json())
        .then(data => this.setState({reservations: data}))
    }

    
    
    render()
    {
        console.log(this.state.reservations)
        return(
            <div>
                <h1>Reservations</h1>
                <ReservationList reservations={this.state.reservations}/>
            </div>
        )
    }
}

export default adminPageReservations;