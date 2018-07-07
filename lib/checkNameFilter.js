'use strict';

function checkNameFilter(name) {
    let nameRegular = new RegExp("^" + name); // Regular expression to get the results that starts by name
    const filteredName = { $regex: nameRegular, $options: "i" };
    return filteredName;
}
module.exports = checkNameFilter;

