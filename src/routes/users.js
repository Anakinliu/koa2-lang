const router = require('koa-router')()

// 加上前缀后，后面的路由的跟路径就是这个前缀
// router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.get('/profile/:userName/:age', async (ctx, next) => {
  console.log(ctx.params);
})


module.exports = router
