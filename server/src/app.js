const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const {sequelize} = require('./models');

const app = express();
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

const PORT = process.env.PORT || 5000;

require('./routes')(app)

sequelize.sync()
    .then(() => {
        app.listen(PORT, () => console.log(`Server started on ${PORT}`));
    })
