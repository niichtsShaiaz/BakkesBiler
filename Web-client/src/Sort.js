class SortData{
    sortCarsByDoors = (doors, list) =>
    {
        var result = list.filter(function(car){
            return car.doors == doors;
        });
    }

    sortCarsBySeats = (seats, list) =>
    {
        var result = list.filter(function(car){
            return car.seats == seats;
        });
    }

    sortCarsByGearType = (type, list) =>
    {
        var result = list.filter(function(car){
            return car.gearType == type;
        });
    }

    sortCarsByAircondition = (boolean, list) =>
    {
        var result = list.filter(function(car){
            return car.aircondition == boolean;
        });
    }

    sortCarsByIsAvailable = (boolean, list) =>
    {
        var result = list.filter(function(car){
            return car.isavailable == boolean;
        });
    }

    sortCarsByIsMake = (make, list) =>
    {
        var result = list.filter(function(car){
            return car.make == make;
        });
    }
}