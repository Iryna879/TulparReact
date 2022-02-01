let express = require('express');
let router = express.Router();

let cHeader = require('../controllers/controllerHeader');
router.get ('/api/header',cHeader.get);
router.post('/api/header',cHeader.post);


let cServices = require('../controllers/controllerServices');
router.get ('/api/services',cServices.get);
router.post('/api/services',cServices.post);


let cWhatIsBlocks = require('../controllers/controllerWhatIsBlocks');
router.get ('/api/whatIsBlocks',cWhatIsBlocks.get);
router.post('/api/whatIsBlocks',cWhatIsBlocks.post);


let cRecommends = require('../controllers/controllerRecommends');
router.get ('/api/recommends',cRecommends.get);
router.post('/api/recommends',cRecommends.post);


let cContacts = require('../controllers/controllerContacts');
router.get ('/api/contacts',cContacts.get);
router.post('/api/contacts',cContacts.post);

let cSpecialists = require('../controllers/controllerSpecialists');
router.get ('/api/specialists',cSpecialists.get);
router.post('/api/specialists',cSpecialists.post);
router.get('/api/specialists/getSlots/:id',cSpecialists.getSlots);
router.post('/api/specialists/book-slot',cSpecialists.bookSlot);

const cPatients = require('../controllers/controllerPatients');
router.get ('/api/patients', cPatients.get);
router.post('/api/patients', cPatients.post);
router.get ('/api/patients/testbyemail/:email', cPatients.testByEmail);


let cAppointments = require('../controllers/controllerAppointments');
router.get ('/api/appointments',cAppointments.get);
router.post('/api/appointments',cAppointments.post);


module.exports = router;

