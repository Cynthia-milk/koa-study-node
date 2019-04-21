const koa=require('koa');
const Router=require('koa-router');
const static=require('koa-static');
const app=new koa();
let router=new Router();
router.get('/user',async ctx=>{
    ctx.body='用户'
})


app.use(router.routes());
app.listen(3000,()=>{
    console.log('server is running....')
})
app.use(static('./static',{
    maxAge:86400*1000,// 设置缓存时间
    index:'1.html'// 根目录的时候打开这个文件
}))



