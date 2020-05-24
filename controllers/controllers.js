const { banksCollection } = require('../config/db');

// @desc      Get all Indian banks name array
// @route     GET /get-all-banks-name-list
// @access    Public
exports.getAllBanks = (request, response) => {
	try {
		const banks = banksCollection();
		banks
			.aggregate([
				{
					$group: { _id: '$bank_name' }
				},
				{
					$project: {
						bank_name: '$_id',
						_id: 0
					}
				},
				{ $sort: { bank_name: 1 } }
			])
			.toArray((err, res) => {
				if (err) {
					response.send(JSON.stringify({ success: false, error: err }));
				}
				response.send(
					JSON.stringify({ success: true, count: res.length, data: res })
				);
			});
	} catch (e) {
		response.send(JSON.stringify({ success: false, error: e }));
		console.log(e);
	}
};

// @desc    Get all states in which queried bank is available in
// @route   GET /get-list-of-states-bank-available-in
// @access  Public
exports.getListOfStatesBankAvailableIn = (request, response) => {
	try {
		const banks = banksCollection();
		const { bank_name } = request.query;
		banks
			.aggregate([
				{
					$match: {
						bank_name: bank_name
					}
				},
				{
					$group: { _id: '$state' }
				},
				{
					$project: {
						state: '$_id',
						_id: 0
					}
				},
				{ $sort: { state: 1 } }
			])
			.toArray(async (err, res) => {
				if (err) {
					response.send(JSON.stringify({ success: false, error: err }));
				}
				response.send(
					JSON.stringify({ success: true, count: res.length, data: res })
				);
			});
	} catch (e) {
		response.send(JSON.stringify({ success: true, error: e }));
		console.log(e);
	}
};

// @desc 		Get all district of queried bank available in the queried state
// @route   GET /get-list-of-districts-bank-available-in
// @access  Public
exports.getListOfDistrictsBankAvailableIn = (request, response) => {
	try {
		const banks = banksCollection();
		const { bank_name, state } = request.query;
		banks
			.aggregate([
				{
					$match: {
						bank_name,
						state
					}
				},
				{
					$group: { _id: '$district' }
				},
				{
					$project: {
						district: '$_id',
						_id: 0
					}
				},
				{ $sort: { state: 1 } }
			])
			.toArray(async (err, res) => {
				if (err) {
					response.send(JSON.stringify({ success: false, error: err }));
				}
				response.send(
					JSON.stringify({ success: true, count: res.length, data: res })
				);
			});
	} catch (e) {
		response.send(JSON.stringify({ success: true, error: e }));
		console.log(e);
	}
};

// @desc 		Get all branches of queried bank available in the queried state and district
// @route   GET /get-list-of-all-bank-branch-available-in
// @access  Public
exports.getListOfAllBankBranchAvailableIn = (request, response) => {
	try {
		const banks = banksCollection();
		const { bank_name, state, district } = request.query;
		banks
			.aggregate([
				{
					$match: {
						bank_name,
						state,
						district
					}
				},
				{
					$group: { _id: '$branch' }
				},
				{
					$project: {
						branch: '$_id',
						_id: 0
					}
				},
				{ $sort: { state: 1 } }
			])
			.toArray(async (err, res) => {
				if (err) {
					response.send(JSON.stringify({ success: false, error: err }));
				}
				response.send(
					JSON.stringify({ success: true, count: res.length, data: res })
				);
			});
	} catch (e) {
		response.send(JSON.stringify({ success: true, error: e }));
		console.log(e);
	}
};

// @desc 		Get the bank branch details of queried bank available in the queried state and district
// @route   GET /get-bank
// @access  Public
exports.getBank = (request, response) => {
	try {
		const banks = banksCollection();
		const { bank_name, state, district, branch } = request.query;
		banks
			.aggregate([
				{
					$match: {
						bank_name,
						state,
						district,
						branch
					}
				}
			])
			.toArray(async (err, res) => {
				if (err) {
					response.send(JSON.stringify({ success: false, error: err }));
				}
				response.send(
					JSON.stringify({ success: true, count: res.length, data: res[0] })
				);
			});
	} catch (e) {
		response.send(JSON.stringify({ success: true, error: e }));
		console.log(e);
	}
};

// @desc 		Get the bank branch details by IFSC code
// @route   GET /get-bank-details
// @access  Public
exports.getBankDetails = (request, response) => {
	try {
		const banks = banksCollection();
		const { ifsccode } = request.query;
		banks
			.aggregate([
				{
					$match: {
						ifsc: ifsccode
					}
				}
			])
			.toArray(async (err, res) => {
				if (err) {
					response.send(JSON.stringify({ success: false, error: err }));
				}
				response.send(
					JSON.stringify({ success: true, count: res.length, data: res[0] })
				);
			});
	} catch (e) {
		response.send(JSON.stringify({ success: true, error: e }));
		console.log(e);
	}
};

// @desc      Get all Indian banks name and it's branches count
// @route     GET /get-total-no-of-each-banks
// @access    Public
exports.getTotalNoOfEachBanks = (_, response) => {
	try {
		const banks = banksCollection();
		banks
			.aggregate([
				{ $group: { _id: '$bank_name', count: { $sum: 1 } } },
				{
					$project: {
						bank_name: '$_id',
						count: '$count',
						_id: 0
					}
				},
				{ $sort: { bank_name: 1 } }
			])
			.toArray((err, res) => {
				if (err) {
					response.send(JSON.stringify({ success: false, error: err }));
					console.log(err);
				}
				response.send(
					JSON.stringify({ success: true, count: res.length, data: res })
				);
			});
	} catch (e) {
		response.send(JSON.stringify({ success: false, data: res }));
		console.log(e);
	}
};

exports.update = (request, response) => {
	// 		try {
	// 	banks
	// 		.updateMany(
	// 			{ bank: bank },
	// 			{
	// 				$set: { bank_name: bank }
	// 			}
	// 		)
	// 		.then((err, res) => {
	// 			console.log(res);
	// 			response.send(JSON.stringify({ data: res }));
	// 		});
	// } catch (e) {
	// 	console.log(e);
	// }
	// try {
	// 	const banks = banksCollection();
	// 	banks
	// 		.updateMany({ bank_name: null }, { $rename: { branch: 'bank_name' } })
	// 		.then((err, res) => {
	// 			console.log(res);
	// 			response.send(JSON.stringify({ data: res }));
	// 		});
	// } catch (e) {
	// 	console.log(e);
	// }
	// try {
	// 	const banks = banksCollection();
	// 	banks
	// 		.updateMany({ state: 'Uttarakhand' }, { $set: { state: 'UTTARAKHAND' } })
	// 		.then((err, res) => {
	// 			console.log(res);
	// 			response.send(JSON.stringify({ data: res }));
	// 		});
	// } catch (e) {
	// 	console.log(e);
	// }
	// try {
	// 	const banks = banksCollection();
	// 	banks
	// 		.updateMany({ 'branch': '$office' }, { $unset: { branch: "" } })
	// 		.then((err, res) => {
	// 			console.log(res);
	// 			response.send(JSON.stringify({ data: res }));
	// 		});
	// } catch (e) {
	// 	console.log(e);
	// }
	// const banks = banksCollection();
	// banks
	// 	.aggregate([{ $addFields: { branch: { '$concat': ['$office'] } } }])
	// 	.toArray((err, res) => {
	// 		if (err) {
	// 			response.send(JSON.stringify({ success: false, error: err }));
	// 			console.log(err);
	// 		}
	// 		response.send(JSON.stringify({ success: true, data: res }));
	// 	});
};

exports.test = (request, response) => {
	response.send('RES ' + request.query.id + ' ' + request.query.test);
};
