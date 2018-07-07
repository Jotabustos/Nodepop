const express = require('express');
const router = express.Router();

const Ads = require('../../models/Ad');
const checkPriceFilter = require('../../lib/checkPriceFilter');

// router.use(basicAuth('admin', '1234')); // para que todo el router pida autenticación

/**
 * GET /
 * Retrieves a list of ads
 */
router.get('/', async (req, res, next) => {
    try {
        // // cual es el usuario?
        // console.log('el usuario autenticado es:', req.user_id);
        const name = req.query.name
        const isSelling = req.query.isSelling
        const price = req.query.price
        const image = req.query.image
        const tag = req.query.tag
        const skip = parseInt(req.query.skip);
        const limit = parseInt(req.query.limit);
        const fields = req.query.fields;
        const sort = req.query.sort;

        // crear un filtro vacio
        const filter = {};

        if (name) { // solo añado el filtro cuando tengo que filtrar
            filter.name = name;
        }
        if (isSelling) { // solo añado el filtro cuando tengo que filtrar
            filter.isSelling = isSelling;
        }
        if (price) { // solo añado el filtro cuando tengo que filtrar
            const priceFilter = checkPriceFilter(price);
            filter.price = priceFilter;
        }
        if (image) { // solo añado el filtro cuando tengo que filtrar
            filter.image = image;
        }
        if (tag) { // solo añado el filtro cuando tengo que filtrar
            filter.tag = tag;
        }


        const ads = await Ads.list(filter, skip, limit, fields, sort); // await espera a se resuelva la promesa y me da el resultado
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