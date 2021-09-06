const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    isMe: false,
    blogList: [
      {
        id: '10010',
        content: '博客内容1',
        date: '2021-9-6',
      },
      {
        id: '10086',
        content: '博客内容2',
        date: '2021-9-1',
      }
    ]
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.get('/test', async (ctx, next) => {
  ctx.body = {
    abc: 123,
    123: 'abc😁'
  }
})

router.post('/post', async (ctx, next) => {
  const { un = "不愿意透露姓名的陌生人", pw } = ctx.request.body;
  ctx.body = {
    un: `你好, ${un}`
  }
})


module.exports = router
