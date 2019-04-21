const koa=require('koa');
const Router=require('koa-router');
let server=new koa();
server.listen(3000,()=>{
    console.log('port 3000 is running...');
})
let router=new Router();
router.use('/user',require('./router/user'));
router.use('/cart',require('./router/cart'));
server.use(router.routes());