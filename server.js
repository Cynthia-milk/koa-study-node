const koa = require('koa');
const Router = require('koa-router');
let server = new koa();
server.listen(2000, () => {
    console.log('port 2000 is running');
})
// 创建路由
let router = new Router();
// koa里面习惯于用async await ,有next方法,但是非常的少用
router.get('/a', async ctx => {
    //相当于 express的send
    ctx.body = 'aaa';
    console.log(ctx.body)
})
// 最后需要把路由添加到服务器上
server.use(router.routes())

