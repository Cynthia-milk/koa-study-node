const Router=require('koa-router');
let router=new Router();
router.get('/a',async ctx=>{
    ctx.body='product的a'
})
module.exports=router.routes();