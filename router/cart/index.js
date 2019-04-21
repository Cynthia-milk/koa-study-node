const Router=require('koa-router');
let router=new Router();
router.get('/a',async ctx=>{
    ctx.body='用户'
})
router.use('/product',require('./product'));
router.use('/shopping',require('./shopping'));
module.exports=router.routes();