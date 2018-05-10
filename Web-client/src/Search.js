class Search{
    filterCarsBySearchMake(string, list)
    {
        return list.filter(car => car.make.includes(string))
    }

    filterCarsBySearchModel(string, list)
    {
        return list.filter(car => car.model.includes(string))
    }
}

const search = new Search();
export default search;