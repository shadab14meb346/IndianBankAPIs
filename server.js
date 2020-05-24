const express = require('express');
const http = require('http');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.port || 3001;
const routes = require('./routes/api_routes');
const { connectDB } = require('./config/db');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', routes);
dotenv.config({ path: './config/config.env' });

connectDB();
// Enable CORS
app.use(cors());
app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => console.log(`API running on localhost:${port}`));
