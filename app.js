
var PORT = process.env.PORT || 51003

var seneca = require('seneca')()

      .add('role:api,path:salestax',function( args, done ){
        this.act('role:salestax,cmd:calculate',{
          net:     parseInt(args.net,10),
          country: args.country
        },done)
      })

      .act('role:web',{use:{
        prefix: '/api',
        pin:    'role:api,path:*',
        map: {
          salestax: true,
        }
      }})

      .client( PORT )


require('express')()

  .get('/ping',function( req, res ){
    res.send( 'v3: '+new Date().toISOString() )
  })

  .use( seneca.export('web') )

  .listen( parseInt(process.argv[2],10) || 51000 )
