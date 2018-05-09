const URL = "https://ezlinodev.com/cars/api/CarApi/";

function handleHttpErrors(res) {
    if (!res.ok) {
        throw {message:res.statusText,status:res.status};
    }
    return res.json();
}

class ApiFacade {
    fetchAllCars = () => {
        return fetch(URL).then(handleHttpErrors);
    }
}

const facade = new ApiFacade();
export default facade;