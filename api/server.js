
//IMPORTS ⬇︎
const express = require( 'express' );
const helmet = require( 'helmet' );
const morgan = require( 'morgan' );
const cors = require( 'cors' );
const server = express();
const restricted = require( '../routers/auth/restricted' );

//GETTING ROUTES ⬇︎
const howtoRoute = require( '../routers/howto/howtoRouter' );
const stepsRoute = require( '../routers/steps/stepsRouter' );
const userRoute = require( '../routers/auth/authRouter' );

//GLOBAL MIDDLEWARE ⬇︎
server.use( express.json());
server.use( helmet());
server.use( morgan('dev'));
server.use( cors());

//APPLYING ROUTES ⬇︎
server.use( '/api/howto' , howtoRoute , restricted );
server.use( '/api/steps' , stepsRoute , restricted );
server.use( '/api/users' , userRoute );

//SANITY CHECk ⬇︎
server.get( '/' , ( req , res ) => {
    res.status(200).json({ message: 'Sup ✌🏼 -Server' })
});

//EXPORTS ⬇︎
module.exports = server;
