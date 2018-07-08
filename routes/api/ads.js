const express = require('express');
const router = express.Router();

const Ads = require('../../models/Ad');
const checkPriceFilter = require('../../lib/checkPriceFilter');
const checkNameFilter = require("../../lib/checkNameFilter");
const jwtAuth = require("../../lib/jwtAuth");

/**
 * GET /
 * Retrieves a list of ads
 */
router.get('/', jwtAuth(), async (req, res, next) => {
    try {

        const name = req.query.name
        const isSelling = req.query.isSelling
        const price = req.query.price
        const image = req.query.image
        const tag = req.query.tag
        const skip = parseInt(req.query.skip);
        const limit = parseInt(req.query.limit);
        const fields = req.query.fields;
        const sort = req.query.sort;

        // Create the filter
        const filter = {};

        if (name) { 
            const nameFilter = checkNameFilter(name);
            filter.name = nameFilter;
        }
        if (isSelling) { 
            filter.isSelling = isSelling;
        }
        if (price) { 
            const priceFilter = checkPriceFilter(price);
            filter.price = priceFilter;
        }
        if (image) { 
            filter.image = image;
        }
        if (tag) { 
            filter.tag = [tag];
        }


        const ads = await Ads.list(filter, skip, limit, fields, sort);
        if (ads.length === 0) { // No products found
            res.json({
                success: true,
                result: 'No products were found matching your selection'
            });
        } else { // Products found
            res.json({
                success: true,
                result: ads
            });
        }
    } catch (err) {
        next(err);
    }
});



module.exports = router;