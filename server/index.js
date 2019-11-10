'use strict'

const koa = require('koa');
const app = new koa();
const bodyParser = require('koa-bodyparser');
const router = require('./router');
const models = require('./models/index');

const PORT = 3333;

app.use(bodyParser());
app.use(router.routes());

  (async function () {
    try {
      await models.sequelize.sync();//{force:true}
      app.listen(PORT, () => {
        console.log(`server running on ${PORT}`);  
      });
    } catch (error) {
      console.log('unable to connect to the database', error);  
    }
  })();