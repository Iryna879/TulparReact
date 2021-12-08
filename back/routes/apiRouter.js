let express = require('express');
let router = express.Router();

let cHeader = require('../controllers/controllerHeader');
router.get ('/api/header',cHeader.get);
router.post('/api/header',cHeader.post);
router.put('/api/header',cHeader.put);
router.delete('/api/header',cHeader.delete);

module.exports = router;