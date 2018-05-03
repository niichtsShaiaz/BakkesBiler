const URL = "http://localhost:8084/jwtbackend";

function handleHttpErrors(res) {
    if (!res.ok) {
        throw {message:res.statusText,status:res.status};
    }
    return res.json();
}

class ApiFacade {
    fetchCars = () =>{
        const options = this.makeFetchOptions("GET");
        return fetch(URL+"/api/CarApi").then(handleHttpErrors);
    }
}
const facade = new ApiFacade();
export default facade;
