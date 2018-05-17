//const URL = "http://localhost:8084/jwtbackend";

const URL = "https://ezlinodev.com/cars";

function handleHttpErrors(res) {
    if (!res.ok) {
        throw {message:res.statusText,status:res.status};
    }
    return res.json();
}

class ApiFacade {
    setToken = (token) => {
        localStorage.setItem('jwtToken', token)
    }
    getToken = () => {
        return localStorage.getItem('jwtToken')
    }
    loggedIn = () => {
        const loggedIn = this.getToken() != null;
        return loggedIn;
    }
    logout = () => {
        localStorage.removeItem("jwtToken");
    }

    login = (em, pass) => {
        const options = this.makeFetchOptions("POST",{ email: em, password: pass });
        return fetch(URL+"/api/login",options,true)
            .then(handleHttpErrors)
            .then(res=>{this.setToken(res.token)})
    }

    fetchData = () =>{
        const options = this.makeFetchOptions("GET");
        return fetch("https://swapi.co/api/people/1",options).then(handleHttpErrors);
    }

    fetchAllCars = () => {
        return fetch(URL + "/api/CarApi/").then(handleHttpErrors);
    }

    makeFetchOptions = (type, b) => {
        let headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        if(this.loggedIn()){
            headers["x-access-token"] = this.getToken();
        }
        return {
            method: type,
            headers,
            body: JSON.stringify(b)
        }
    }
}
const facade = new ApiFacade();
export default facade;
