
//IMPORTS ⬇︎
const express = require( 'express' );
const Steps = require( './stepModel' );
const howtos = require( '../howto/howtoModel' );
const router = express.Router();
const restricted = require( '../auth/restricted' );

//RECIEVING ALL STEPS ⬇︎
router.get( '/' , restricted, ( req , res ) => {
    Steps.get()
    .then( steps => {
        res.status( 200 ).json( steps );
    })
    .catch( error => {
        res.status( 500 ).json({ message: 'Server error getting all Steps' , error })
    })
});

//RECIEVING STEPS BY ID ⬇︎
router.get( '/:id' , ( req , res ) => {
    const { id } = req.params;
    Steps.get( id )
    .then( step => {
        res.status( 200 ).json( step )
    })
    .catch( error => {
        res.status( 500 ).json({ message: 'Server error getting individual Steps' , error })
    })
});

//ADDING STEPS TO HOWTO ⬇︎
router.post( '/' , ( req , res ) => {
    const step = req.body;
    howtos.get( step.howtoId )
        .then( howto => {
            if ( step.step && step.howtoId ) {
                Steps.add( step )
                .then( newStep => {
                    res.status( 201 ).json({ message: 'Step Successfully Added' , newStep })
                })
            } else {
                res.status( 406 ).json({ message: 'howtoId or Step Info field is empty' });
            }
        })
    .catch( error => {
        res.status( 500 ).json({ message: 'Server error creating Step', error });
    })
});

//REMOVE STEP ⬇︎
router.delete( '/:id' , restricted , ( req , res ) => {
    const { id } = req.params;
    Steps.remove( id )
    .then( step => {
        if ( step ) {
            res.status( 200 ).json({ message: 'Step sucessfully deleted'});
        } else {
            res.status( 404 ).json({ message: 'Can not find step to delete' });
        }
    })
    .catch( error => {
        res.status( 500 ).json({ message: 'Server error deleting Step' , error });
    })
});

//UPDATING STEP ⬇︎
router.put( '/:id' , ( req , res ) => {
    const { id } = req.params;
    const step = req.body;
    if ( step.step.length < 128 ) {
        Steps.update( id, step )
        .then( updated => {
            res.status( 200 ).json({ message: 'Sucessfully updated' , updated });
        })
        .catch( error => {
            res.status( 404 ).json({ message: 'Not found' , error });
        })
    } else {
        res.status( 405 ).json({ message: 'Step is longer than 128 characters ( unacceptable )' });
    }
});

//EXPORTS ⬇︎
module.exports = router;