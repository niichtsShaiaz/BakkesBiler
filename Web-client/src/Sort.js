class SortData{
    sortCarsByDoors = (doors, list) =>
    {
        var _ = require('lodash');
        return _.filter(list, {'doors' : doors});
    }

    sortCarsBySeats = (seats, list) =>
    {
        var _ = require('lodash');
        return _.filter(list, {'seats' : seats});
    }

    sortCarsByGearType = (type, list) =>
    {
        var _ = require('lodash');
        return _.filter(list, {'gearType' : type});
    }

    sortCarsByAircondition = (boolean, list) =>
    {
        var _ = require('lodash');
        return _.filter(list, {'aircondition' : boolean});
    }

    sortCarsByIsAvailable = (boolean, list) =>
    {
        var _ = require('lodash');
        return _.filter(list, {'isavailable' : boolean});
    }

    sortCarsByIsMake = (make, list) =>
    {
        var _ = require('lodash');
        return _.filter(list, {'make' : make});
    }
}

const sort = new SortData();
export default sort;