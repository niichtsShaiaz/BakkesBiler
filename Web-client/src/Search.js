class Search{
    filterCarsBySearchMake(string, list)
    {
        var _ = require('lodash');
        return _.filter(list, {'make' : string});
    }

    filterCarsBySearchModel(string, list)
    {
        var _ = require('lodash');
        return _.filter(list, {'model' : string});
    }
}

const search = new Search();
export default search;