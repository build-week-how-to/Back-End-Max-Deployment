
//IMPORTS ⬇︎
const express = require( 'express' );
const helmet = require( 'helmet' );
const morgan = require( 'morgan' );
const cors = require( 'cors' );
const server = express();

//GETTING ROUTES ⬇︎
const howtoRoute = require( '../routers/howto/howtoRouter' );
const stepsRoute = require( '../routers/steps/stepsRouter' );
const userRouter = require( '../routers/auth/authRouter' );

//GLOBAL MIDDLEWARE
server.use( express.json());
server.use( helmet());
server.use( morgan('dev'));
server.use( cors());

//APPLYING ROUTES ⬇︎
server.use( '/api/howto' , howtoRoute );
server.use( '/api/steps' , stepsRoute );
server.use( '/api/users' , userRouter );

//SANITY CHECk ⬇︎
server.get( '/' , ( req , res ) => {
    res.send( 'Sup ✌🏼 -Server' )
});

//EXPORTS ⬇︎
module.exports = server;
