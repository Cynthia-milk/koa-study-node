const mysql=require('mysql');
let con=require('co-mysql');
let conn=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'20190122'
})
let db=con(conn);
module.exports=db;