const koa=require('koa');
const app=new koa();
app.listen(3000);
// cookie是koa框架自带的
app.keys=[
    '32312312312',
    'fffkorieihrhewr289423',
    'd3243wqdwewe2342323e',
    'iweuweubnbejwb09039123',
    '32323dssdsadsjadks2312'
]
app.use(async ctx=>{
    // ctx.cookies.set('user','yue',{signed:true});
    console.log(ctx.cookies.get('user',{signed:true}))
})