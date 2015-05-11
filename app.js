
require('express')()

  .get('/ping',function( req, res ){
    res.send( 'v1: '+new Date().toISOString() )
  })

  .listen( parseInt(process.argv[2],10) || 51000, 
           process.env.WEB_HOST || 'localhost' )
