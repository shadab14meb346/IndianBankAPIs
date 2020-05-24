const express = require('express');
const router = express.Router();
const path = require('path');
const {
	getTotalNoOfEachBanks,
	getBankDetails,
	getListOfStatesBankAvailableIn,
	getListOfDistrictsBankAvailableIn,
	getListOfAllBankBranchAvailableIn,
	getBank,
	getAllBanks,
	test,
	update
} = require('../controllers/controllers');
router.use(function (req, res, next) {
	next();
});

router
	.get('/', (req, res) => {
		res.sendFile(path.join(__dirname, '../public/index.html'));
	})
	.get('/get-all-banks-name-list', getAllBanks)
	.get('/get-list-of-states-bank-available-in', getListOfStatesBankAvailableIn)
	.get(
		'/get-list-of-districts-bank-available-in',
		getListOfDistrictsBankAvailableIn
	)
	.get(
		'/get-list-of-all-bank-branch-available-in',
		getListOfAllBankBranchAvailableIn
	)
	.get('/get-bank', getBank)
	.get('/get-bank-details', getBankDetails)
	.get('/get-total-no-of-each-banks', getTotalNoOfEachBanks)
	.get('/t', test)
	.get('/update', update);
module.exports = router;
