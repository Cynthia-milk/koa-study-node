const koa = require('koa');
const Router = require('koa-router');
let server = new koa();
server.listen(2000, () => {
    console.log('port 2000 is running');
})
// 创建路由
// 主的路由,
let router=new Router();
let userRouter=new Router();
let  company=new Router();
let admin=new Router();
company.get('/a',async ctx=>{
    ctx.body='企业的a'
})
admin.get('/a',async ctx=>{
    ctx.body="管理员的a"
})
userRouter.get('/a',async ctx=>{
    ctx.body='user的a'
})

userRouter.use('/company',company.routes());
userRouter.use('/admin',admin.routes())
// 最后需要把路由添加到服务器上
router.use('/user',userRouter.routes());
// router.use('/news',userRouter.routes());
// router.use('/cart',userRouter.routes());
server.use(router.routes())