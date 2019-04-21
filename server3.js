const koa=require('koa');
const Router=require('koa-router');
const app=new koa();
let router=new Router();

// router.get('/news/:id/',async ctx=>{
//     console.log(ctx.params);
//     let {id}=ctx.params;
//     ctx.body='新闻'+id;
// })

// 如果没有调用next的时候,路由相同的情况下,先遇到谁就显示谁的值,如果有调用next的话,就会显示next后面的那个值
router.get('/news/1',(ctx,next)=>{
    ctx.body='aaaa';
    next();
})

router.get('/news/:id',(ctx,next)=>{
    ctx.body='bbbv';
})
app.use(router.routes());
app.listen(3000,()=>{
    console.log('server is running....')
})