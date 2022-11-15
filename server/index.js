require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const models = require('./models/models');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const router = require('./routes/index');
const errorHandler = require('./middleware/errorHandlingMiddleware');
const path = require('path');



const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors()); // browser request
app.use(express.json()); // parse JSON
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({})); //
app.use('/api', router);


app.use(errorHandler); // error processing middleware, should be the last one

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`listening on port ${PORT}`));
  }
  catch (e) {
    console.log(e);
  }
};

start();
