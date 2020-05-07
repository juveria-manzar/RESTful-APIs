var express = require('express');
var router = express.Router()

let countryCtrl = require('../controllers/countries')


router.route('/countries/new')
    .get(countryCtrl.getCountries);

router.route('/countries/:countryid/edit')
    .get(countryCtrl.getEditCountryForm)


router.route('/countries/:countryid')
    .get(countryCtrl.getCountry)
    .put(countryCtrl.editCountry)
    .delete(countryCtrl.deleteCountry)

router.route('/countries')
    .get(countryCtrl.getCountries)
    .post(countryCtrl.createCountry)


module.exports = router;