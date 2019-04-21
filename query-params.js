const koa=require('koa');
const Router=require('koa-router');
const app=new koa();
const router=new Router();
app.listen(3000);
router.get('/news/:id',async (ctx,next)=>{
    let {id}=ctx.params
    
    ctx.body=id;
    next()
})
router.get('/users/',async ctx=>{
    let {username,address}=ctx.query;
    ctx.body=`${username}你好,你的地址是${address}`
})
app.use(router.routes());