const router = require('koa-router')()
const db=require('./config/mysqlconfig')
router.prefix('/article')
//查找文集
router.get('/getanthology', async (ctx) => {
  let sql='SELECT*FROM anthology_table'
  await db.query(sql).then(res=>{
    let result=JSON.stringify(res)
    return ctx.body={
      status:'1',
      msg:'success',
      list:JSON.parse(result)
    }
  }).catch(e=>{
    return ctx.body={
      status:'0',
      msg:'error'
    }
  })
})
//查找文集下面的文章
router.get('/article',async(ctx)=>{
  let sql='SELECT*FROM'
})
//新增文集
router.post('/addanthology',async(ctx)=>{
  let {title}=ctx.request.body;
  let uid=parseInt(Math.random()*200) 
  let anid=parseInt(Math.random()*200) 
  let sql='insert anthology_table value("001","'+title+'",'+anid+')';
  console.log(sql)
  await db.query(sql).then(res=>{
    return ctx.body={
      status:'1',
      msg:'success',
      info:{
        uid,
        title,
        anid
      }
    }
  }).catch(e=>{
    return ctx.body={
      status:'0',
      msg:'error',
    }
  })
})
module.exports = router
