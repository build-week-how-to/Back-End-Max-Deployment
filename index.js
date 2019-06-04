
//IMPORTS ⬇︎
const server = require( './api/server' );

//PORT SETUP ⬇︎
const port = process.env.PORT || 4242;

//INITIATING PORT ⬇︎
server.listen( port , () => {
    console.log( `\n Your server is up on http://localhost:${port} \n` )
});