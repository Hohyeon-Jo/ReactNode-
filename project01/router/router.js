const express = require('express')
const router = express.Router()

//DB 세팅
const mysql = require('mysql')

const path = require('path')

let conn = mysql.createConnection({
    host : "127.0.0.1",
    user : "root",
    password : "1234",
    port : "3306",
    database : "nodejs_db"
})

router.post('/joinData',(req, res)=>{
    console.log('joinData라우터')
    console.log(req.body)

    let sql = 'insert into member values (?,?,3)'
    conn.query(sql,[req.body.user.id,req.body.user.pw],(err,rows)=>{
        if(rows){
            console.log('회원가입 성공!')
            res.json({
                result : 'success'
            })
            res.end()
        }else {
            console.log('회원가입 실패!')
            res.json({
                result : 'fail'
            })
        }

        res.end()
    })
})

router.get('/Login',(req, res)=>{
    console.log('Login')
    console.log(req.body)

    const ID = req.body.user.id
    const PW = req.body.user.pw

    let sql = 'select * from web_member where email=? and pw=?'
    conn.query(sql,[ID,PW],(err,rows)=>{
        console.log(rows)

        res.end()
    })
})




router.get('*', (req, res)=>{
    console.log('happy hacking!!')
    res.sendFile(path.join(__dirname,'..','react-project','build','index.html'))
})

module.exports = router