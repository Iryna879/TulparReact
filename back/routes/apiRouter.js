let express = require('express');
let router = express.Router();

let cHeader = require('../controllers/controllerHeader');
router.get ('/api/header',cHeader.get);
router.post('/api/header',cHeader.post);
router.put('/api/header',cHeader.put);
router.delete('/api/header',cHeader.delete);

let cServices = require('../controllers/controllerServices');
router.get ('/api/services',cServices.get);
router.post('/api/services',cServices.post);
router.put('/api/services',cServices.put);
router.delete('/api/services',cServices.delete);

let cWhatIsBlocks = require('../controllers/controllerWhatIsBlocks');
router.get ('/api/whatIsBlocks',cWhatIsBlocks.get);
router.post('/api/whatIsBlocks',cWhatIsBlocks.post);
router.put('/api/whatIsBlocks',cWhatIsBlocks.put);
router.delete('/whatIsBlocks',cWhatIsBlocks.delete);

module.exports = router;

//token - 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