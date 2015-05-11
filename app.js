var WEB_PORT = process.env.WEB_PORT || 51000
var WEB_HOST = process.env.WEB_HOST || 'localhost'
var ACT_PORT = process.env.ACT_PORT || 51001
var ACT_HOST = process.env.ACT_HOST || 'localhost'


var seneca = require('seneca')()

      .add('role:api,path:salestax',function( args, done ){
        this.act('role:salestax,cmd:calculate',{
          net:      parseInt(args.net,10),
          country:  args.country,
          category: args.category
        },done)
      })

      .act('role:web',{use:{
        prefix: '/api',
        pin:    'role:api,path:*',
        map: {
          salestax: true,
        }
      }})

      .client({
        port: ACT_PORT,
        host: ACT_HOST,
      })


require('express')()

  .get('/ping',function( req, res ){
    res.send( 'v2: '+new Date().toISOString() )
  })

  .use( seneca.export('web') )

  .listen(WEB_PORT,WEB_HOST)
