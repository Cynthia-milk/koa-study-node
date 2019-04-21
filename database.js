const koa=require('koa');
const Router=require('koa-router');
const app=new koa();
// 添加数据库到全局
app.context.db=require('./libs/database');
// 因为所有的请求都会走这一步,所以在这边添加错误处理能提高性能
app.use(async (ctx, next)=>{
    try{
      await next();
    }catch(e){
      ctx.body='错了';
    }
  });
  const router=new Router();
  router.get('/a',async ctx=>{
    //  ctx.db.query(`SELECT * FROM user_table`,(err,data)=>{
    //     if(err) return  err;
    //     console.log(data);
    //  })
    //  console.log(query)
    console.log(ctx.db);
    ctx.body='weqwe'
})
// 所有路由都会经过这里,所以在这边进行错误处理
router.all('',async ctx=>{
    try{
        await next();
    }catch(e){
        ctx.body='没有该路由'
    }
})

app.use(router.routes());
app.listen(3000);