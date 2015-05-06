
require('express')()

  .get('/ping',function( req, res ){
    res.send( 'v2: '+new Date().toISOString() )
  })

  .listen( parseInt(process.argv[2],10) || 3000 )
