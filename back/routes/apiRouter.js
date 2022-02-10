let express = require('express');
let router = express.Router();

let cHeader = require('../controllers/controllerHeader');
router.get ('/header',cHeader.get);
router.post('/header',cHeader.post);

let cServices = require('../controllers/controllerServices');
router.get ('/services',cServices.get);
router.post('/services',cServices.post);

let cWhatIsBlocks = require('../controllers/controllerWhatIsBlocks');
router.get ('/whatIsBlocks',cWhatIsBlocks.get);
router.post('/whatIsBlocks',cWhatIsBlocks.post);

let cRecommends = require('../controllers/controllerRecommends');
router.get ('/recommends',cRecommends.get);
router.post('/recommends',cRecommends.post);

let cSpecialists = require('../controllers/controllerSpecialists');
router.get ('/specialists',cSpecialists.get);
router.post('/specialists',cSpecialists.post);
router.get('/specialists/getSlots/:id',cSpecialists.getSlots);
router.post('/specialists/book-slot',cSpecialists.bookSlot);

let cPatients = require('../controllers/controllerPatients');
router.get ('/patients', cPatients.get);
router.post('/patients', cPatients.post);
router.get ('/patients/testbyemail/:email', cPatients.testByEmail);


let cAppointments = require('../controllers/controllerAppointments');
router.get ('/appointments',cAppointments.get);
router.post('/appointments',cAppointments.post);
router.get('/appointments/upcoming-appointments/:patientEmail',cAppointments.upcomingAppointments);
router.delete('/appointments', cAppointments.delete);


module.exports = router;

