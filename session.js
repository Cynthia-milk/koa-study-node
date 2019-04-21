const koa=require('koa');
const session=require('koa-session');
const app=new koa();
app.listen(3000,()=>{
    console.log('port is running...')
})

app.keys=[
    'eehuehuwehwue',
    'eweyweywewyqeuw',
    'dhsjdhasdasjd',
    'sdsadasdsa'
]
app.use(session({
    maxAge:60*20*1000,// 有效期
    renew:true // 自动续期
},app))
app.use(async ctx=>{
 if(!ctx.session['view']){
    ctx.session['view']=1;
 }
 ctx.session['view']++
 ctx.body=`欢迎你第${ctx.session.view}次来访`
})