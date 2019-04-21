const koa=require('koa');
const Router=require('koa-router')
const app=new koa();
app.listen(3000,()=>{
    console.log('port 3000 is running....');
})
let router=new Router();
let userRouter=new Router();
let company=new Router();
let admin=new Router();
company.get('/a',async ctx=>{
    ctx.body='企业的a'
})
admin.get('/a',async ctx=>{
    ctx.body='管理的 a'
})
userRouter.get('/a',async ctx=>{
    ctx.body='用户的a'
})
userRouter.use('/company',company.routes())
userRouter.use('/admin',admin.routes());
router.use('/user',userRouter.routes())
app.use(router.routes())