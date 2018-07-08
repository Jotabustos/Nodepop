'use strict';

// Function to filter by price

function checkPriceFilter(price) {
    const priceString = price.toString();
    let filterPrice = '';
    if (priceString.split('-').length > 2) { // Error, many - 
        filterPrice = '';
    } else {
        if (priceString.includes("-")) { // Filter by certain price values
            if (priceString.charAt(0) === "-") { // Filter $lt
                const numberLT = Number(priceString.slice(1, ));
                filterPrice = { $lt:numberLT};
            } else if (priceString.charAt(priceString.length - 1) === "-") { // Filter $gt
                const numberGT = Number(priceString.slice(0, -1));
                filterPrice = { $gt:numberGT};
            } else { // Filter between
                const limitNumbers = priceString.split("-");
                const numberLT = Number(limitNumbers[0]);
                const numberGT = Number(limitNumbers[1]);
                if(numberLT>numberGT){
                    filterPrice = ''; // Error, misplaced bounds
                }else{
                    filterPrice = { $lt:numberGT, $gt:numberLT};
                }
            }
        }else{ // Filter by a single value
            filterPrice = price;
        }
    }

    return filterPrice;
}

module.exports = checkPriceFilter;