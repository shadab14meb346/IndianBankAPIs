const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const routes = require('./routes/api_routes');
const { connectDB } = require('./config/db');

dotenv.config({ path: './config/config.env' });

connectDB();

const app = express();

// Enable CORS
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', routes);

const server = app.listen(process.env.PORT || 3001, () => {
	console.log(`Server running in ${process.env.PORT}`);
});
