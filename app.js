
require('express')()

  .get('/ping',function( req, res ){
    res.send( 'v1: '+new Date().toISOString() )
  })

  .listen( 3000 )
