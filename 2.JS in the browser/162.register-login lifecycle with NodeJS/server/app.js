const express = require('express'),
	app = express(),
	cors = require('cors'),
	port = process.env.API_PORT || 4444,
	bcrypt = require('bcrypt'),
	saltRounds = 13,
	users = require('./data').users;

// Handle json body request:
app.use(express.json());
app.use(cors());

// Warning: Data from client not being sanitized

app.post('/register', async (req, res) => {
	console.log(req.body);
	// Get email and pass from req.body + check for no dupes:
	let userMatch = users.find(user => req.body.email === user.email);
	if (!userMatch) {
		// bcrypt.hash is asynchronous
		let passHash = await bcrypt.hash(req.body.password, saltRounds);
		// Add to the users data:
		let newUser = {
			_id: Date.now(),
			email: req.body.email,
			password: passHash,
		};
		users.push(newUser);
		console.log('Full user list', users);
		// Send response:
		res.status(201).send({ data: newUser });
	} else {
		// User already exists
		res
			.status(400)
			.send({ error: { code: 400, message: 'Email already taken' } });
	}
});

app.post('/login', async (req, res) => {
	// Get email and pass + find matches for the email
	let userMatch = users.find(user => req.body.email === user.email);
	let submittedPass = req.body.password; // Plain text from browser.
	if (userMatch) {
		// Validate pass using bcrypt
		let savedPass = userMatch.password; // Previously hashed.
		console.log(submittedPass, savedPass);
		const passwordDidMatch = await bcrypt.compare(submittedPass, savedPass);

		if (passwordDidMatch) {
			res.status(200).send({ data: { token: 'Pretended token' } });
		} else {
			res
				.status(401)
				.send({ error: { code: 401, message: 'Invalid user/pass' } });
		}
	} else {
		//No user found; create fake delay as to not reveal there was no match
		let fakePass = `$2b$${saltRounds}$invalidusernameeeeeeeeeeeeeee`;
		await bcrypt.compare(submittedPass, fakePass);

		res
			.status(401)
			.send({ error: { code: 401, message: 'Invalid user/pass' } });
	}
});

app.listen(port, function (err) {
	if (err) {
		console.error('Failure to launch server.');
		return;
	}
	console.log(`Listening on port ${port}`);
});

/** BCRYPT
 * With a ~2GHz processor approximation...
 * 2^rounds of hashing
 * 
rounds=8 : ~40 hashes/sec
rounds=9 : ~20 hashes/sec
rounds=10: ~10 hashes/sec
rounds=11: ~5  hashes/sec
rounds=12: 2-3 hashes/sec
rounds=13: ~1 sec/hash
rounds=14: ~1.5 sec/hash
rounds=15: ~3 sec/hash
rounds=25: ~1 hour/hash
rounds=31: 2-3 days/hash
 */
