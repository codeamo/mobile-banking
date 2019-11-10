'use strict'

const Router = require('koa-router');
const router = new Router();
const ctr = require('./controllers/index');

router.post('/register', ctr.createUser);
router.post('/register/:userId/card', ctr.createCard);
router.post('/tx', ctr.createTx);
// router.update('/tx', ctr.transfer);
// router.get('/user', ctr.createUser);
// router.get('/user/:userId/card', ctr.createCard);
// router.post('/user/:userId/account', ctr.createAccount);


module.exports = router;