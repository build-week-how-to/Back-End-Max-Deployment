
//IMPORTS ⬇︎
const express = require( 'express' );
const howtos = require( './howtoModel' );
const restricted = require( '../auth/restricted' );
const router = express.Router();

//GET ALL HOWTOS ⬇︎
router.get( '/' , restricted , ( req , res ) => {
    howtos.get()
    .then( howto => {
        res.status( 200 ).json( howto );
    })
    .catch( error => {
        res.status( 500 ).json({ message: 'Server error getting all How tos' , error });
    })
});

//GET HOWTO BY ID ⬇︎
router.get( '/:id' , restricted , ( req , res ) => {
    const { id } = req.params;
    howtos.get( id )
    .then( howto => {
        res.status( 200 ).json( howto );
    })
    .catch( error => {
        res.status( 500 ).json({ message: 'Server error getting individual How To' , error })
    })
});

//ADD A HOWTO ⬇︎
router.post( '/', restricted , async ( req, res ) => {
    console.log( req.body )
    try {
        const howto = await howtos.insert( req.body );
        res.status( 201 ).json({ message: 'Added Successfully' });
    } catch ( error ) {
        console.log( error );
        res.status( 500 ).send( '500' );
    }
});

//DELETE A HOW TO ⬇︎
router.delete( '/:id' , restricted , ( req, res ) => {
    const { id } = req.params;
    howtos.remove( id )
    .then( count => {
        if ( count ) {
            res.status( 200 ).json({ message: 'Successfully Deleted' , count });
        } else {
            res.status( 404 ).json({ message: 'Can not find How to to Delete' });
        }
    })
    .catch( error => {
        res.status( 500 ).json({ message: 'Server error deleting HowTo' , error });
    })
});

//UPDATE HOWTO ⬇︎
router.put( '/:id' , restricted , ( req , res ) => {
    const { id } = req.params;
    const howto = req.body;
        try {
            if ( howto.title ) {
                howtos.update( id , howto )
                res.status( 200 ).json({ message: 'Updated Successfully' });
            } else {
                res.status( 400 ).json({ message: 'Missing Title' });
            }
        } catch ( error ) {
            res.status( 404 ).json({ message: 'How To not found' , error });
        }
});

//EXPORTS ⬇︎
module.exports = router;