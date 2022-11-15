const Router = require('express');
const router = new Router();
const brandRouter = require('./brandRouter');
const typeRouter = require('./typeRouter');
const deviceRouter = require('./deviceRouter');
const userRouter = require('./userRouter');

router.use('/user', userRouter);
router.use('/device', deviceRouter);
router.use('/brand', brandRouter);
router.use('/type', typeRouter);

module.exports = router;
