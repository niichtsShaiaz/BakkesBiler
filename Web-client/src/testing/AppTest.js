import React, { Component } from "react"
import facade from "./apiFacadeTest";

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {dataFromServer: [] };
    }

    componentDidMount() {
        facade.fetchAllCars().then(res => this.setState({ dataFromServer: res }));
    }

    render(){
        let cars = this.state.dataFromServer;
        console.log(cars);
        return(
            <div>
                <h1>Hello World!</h1>
                {cars.map((car, index) => (
                    <p key={index} >{car.regno}</p>
                ))}
            </div>
        )
    };
}

export default App;