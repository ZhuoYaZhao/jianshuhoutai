const mysql=require('mysql')
const config=require('./dbconfig')
const pool=mysql.createPool({
    host:config.database.host,
    port:config.database.port,
    user:config.database.user,
    password:config.database.password,
    database:config.database.database,
})
const allServices={
    query:function(sql,values) {
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,connect)=>{
                if(err){
                    reject(err)
                }else{
                    connect.query(sql,values,(err,rows)=>{
                        if(err){
                            reject(err)
                        }else{
                            resolve(rows)
                        }
                        connect.release()
                    })
                }
            })
        })
    }
}
module.exports=allServices