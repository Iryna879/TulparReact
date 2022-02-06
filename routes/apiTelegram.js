let express = require('express');
let router = express.Router();

let cTelegram = require('../controllers/telegram/SendTelegram')
router.post('/sendTelegram',cTelegram.post);

module.exports = router;