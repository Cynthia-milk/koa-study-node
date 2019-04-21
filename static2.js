const Koa = require('koa');
const Router = require('koa-router');
const static = require('koa-static');
const app = new Koa();
app.listen(3000);
let router = new Router();
router.get('/user', async ctx => {
    ctx = '用户'
})
app.use(router.routes());

let staticRouter = new Router();
staticRouter.all(/(\.jpg|\.png|\.gif)$/i, static('./static', {
    maxAge: 60 * 86400 * 1000
}));
staticRouter.all(/(\.css)$/i, static('./static', {
    maxage: 1 * 86400 * 1000
}));
staticRouter.all(/(\.html|\.htm|\.shtml)$/i, static('./static', {
    maxage: 20 * 86400 * 1000
}));
staticRouter.all('', static('./static', {
    maxage: 30 * 86400 * 1000
}));
app.use(staticRouter.routes());