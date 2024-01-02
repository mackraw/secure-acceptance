const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const crypto = require('crypto');
require('dotenv').config()

// Set up routes
const indexRouter = require('./routes/index');
const secureAcceptanceWebMobileRouter = require('./routes/secureAcceptanceWebMobile');
const secureAcceptanceCheckoutRouter = require('./routes/secureAcceptanceCheckout');

const app = express();

// Set up views
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/secureAcceptanceWebMobile', secureAcceptanceWebMobileRouter);
app.use('/secureAcceptanceCheckout', secureAcceptanceCheckoutRouter);

app.locals.generateUUIDv4 = () => {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
        (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
    );
};

app.listen(4444);
