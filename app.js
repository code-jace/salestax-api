
require('express')()

  .get('/ping',function( req, res ){
    res.send( new Date().toISOString() )
  })

  .listen( 51000 )
