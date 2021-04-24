const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// Setup server port
const port = process.env.PORT || 5000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a root route
app.get('/', (req, res) => {
  res.send("Arjo");
});

// Require customer routes
const alertRoutes = require('./src/routes/alert.routes')
const caregiverRoutes = require('./src/routes/caregiver.routes')
const caregiverSummaryRoutes = require('./src/routes/caregiversummary.routes')
const customerRoutes = require('./src/routes/customer.routes')
const facilityRoutes = require('./src/routes/facility.routes')
const kpiRoutes = require('./src/routes/kpi.routes')
const loaRoutes = require('./src/routes/loa.routes')
const notificationRoutes = require('./src/routes/notification.routes')
const physioRoutes = require('./src/routes/physio.routes')
const questionRoutes = require('./src/routes/question.routes')
const questionnaireRoutes = require('./src/routes/questionnaire.routes')
const residentRoutes = require('./src/routes/resident.routes')
const residentSummaryRoutes = require('./src/routes/residentsummary.routes')
const roomRoutes = require('./src/routes/room.routes')
const wardRoutes = require('./src/routes/ward.routes')
const wearableRoutes = require('./src/routes/wearable.routes')

// using as middleware
app.use('/api/v1/alerts', alertRoutes)
app.use('/api/v1/caregivers', caregiverRoutes)
app.use('/api/v1/caregiverSummary', caregiverSummaryRoutes)
app.use('/api/v1/customers', customerRoutes)
app.use('/api/v1/facilities', facilityRoutes)
app.use('/api/v1/kpi', kpiRoutes)
app.use('/api/v1/loa', loaRoutes)
app.use('/api/v1/notifications', notificationRoutes)
app.use('/api/v1/physioTests', physioRoutes)
app.use('/api/v1/questions', questionRoutes)
app.use('/api/v1/questionnaire', questionnaireRoutes)
app.use('/api/v1/residents', residentRoutes)
app.use('/api/v1/residentSummary', residentSummaryRoutes)
app.use('/api/v1/rooms', roomRoutes)
app.use('/api/v1/wards', wardRoutes)
app.use('/api/v1/wearables', wearableRoutes)

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});