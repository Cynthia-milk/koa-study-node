const koa=require('koa');

const body=require('koa-better-body');
const app=new koa();
app.listen(3000,()=>{
    console.log('server is running...');
})
app.use(body({
    uploadDir:'./static/upload'
}))
app.use(async ctx=>{
   //文件和post数据
  console.log(ctx.request.fields);
    ctx.body='数据提交成功啦'
})