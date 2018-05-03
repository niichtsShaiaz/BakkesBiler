class SortData{
    sortCarsByDoors = (doors, list) =>
    {
        var result = list.filter(function(car){
            return car.doors == doors;
        });
        return result
    }

    sortCarsBySeats = (seats, list) =>
    {
        var result = list.filter(function(car){
            return car.seats == seats;
        });
        return result
    }

    sortCarsByGearType = (type, list) =>
    {
        var result = list.filter(function(car){
            return car.gearType == type;
        });
        return result
    }

    sortCarsByAircondition = (boolean, list) =>
    {
        var result = list.filter(function(car){
            return car.aircondition == boolean;
        });
        return result
    }

    sortCarsByIsAvailable = (boolean, list) =>
    {
        var result = list.filter(function(car){
            return car.isavailable == boolean;
        });
        return result
    }

    sortCarsByIsMake = (make, list) =>
    {
        var result = list.filter(function(car){
            return car.make == make;
        });
        return result
    }
}