const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config()
const controller = require('./controller');

const app = express();
massive(process.env.CONNECTION_STRING).then( db => {
  
  app.set('db',db);
  

  // db.new_planes()
  //   .then( planes => console.log( planes ) )
  //   .catch( err => console.log( err ) );

  // db.get_planes()
  //   .then( planes => console.log( planes ) )
  //   .catch( err => console.log( err ) );

  app.get('/api/planes', controller.getPlanes);
  

});


app.use( bodyParser.json() );
app.use( cors() );





const port = 4000 || process.env.PORT
app.listen(port, () => {
     console.log(`Server listening on port ${port}`) 
     
    } );
