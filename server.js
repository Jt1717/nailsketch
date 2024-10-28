const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./db');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
const clientRoutes = require('./routes/clients');
const designRoutes = require('./routes/designs');
const pricingRoutes = require('./routes/pricing');

app.use('/api/clients', clientRoutes);
app.use('/api/designs', designRoutes);
app.use('/api/pricing', pricingRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
