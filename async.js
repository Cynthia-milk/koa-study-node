
// 读取文件
// const fs=require('fs');
// const readFile=function (finleName){
//     return new Promise((resolve,reject)=>{
//         fs.readFile(finleName,(err,data)=>{
//             if(err) return reject(err);
//             resolve(data)
//         })
//     })
// }
// const asycnFile=async function(){
//     const data1=await readFile('data1.txt');
//     const data2=await readFile('data2.txt');
//     console.log(data1.toString(),data2.toString());
// }
// asycnFile();


// 错误机制处理
async function f(){
    return 'hello world22';

}
f().then(v=>{
    console.log(v);
})

function timeout(ms){
    return new Promise((resolve)=>{
        setTimeout(resolve,ms);
    })
}
async function print(value,ms){
    await timeout(ms);
    console.log(value);
}
print('node.js ',50)

// async fn 
async function aa(){
   return await 1223
}
console.log(aa())

