const Router=require('koa-router');
let router=new Router();
router.get('/a',async ctx=>{
    ctx.body='管理的a';
})
module.exports=router.routes();