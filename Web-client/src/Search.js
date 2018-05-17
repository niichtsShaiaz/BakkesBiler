class Search{
    filterCarsBySearchMake(string, list)
    {
        return list.filter(car => car.make.includes(string))
    }

    filterCarsBySearchModel(string, list)
    {
        return list.filter(car => car.model.includes(string))
    }

    filterCarsBySearch(string, list)
    {
        return list.filter(car => car.make.includes(string) || car.model.includes(string) || car.location.includes(string) || car.gearType.includes(string))
    }
}

const search = new Search();
export default search;