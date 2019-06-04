
//IMPORTS ⬇︎
const db = require( '../../data/dbConfig' );
const map = require( '../../data/helpers/mappers' );

//EXPORTS ⬇︎
module.exports = {
    get,
    insert,
    update,
    remove,
    getSteps,
    // findById
}


//GET HOW TOS AND STEPS ⬇︎
function get( id ) {
    let query = db( 'howtos AS h' );
    if ( id ) {
        query.where( 'h.id' , id ).first();
        const promise = [ query, this.getSteps( id ) ];
        return Promise.all( promise ).then( function( results ) {
            let [ howto , steps ] = results;
            howto.steps = steps;
            return map.toggleStep( howto );
        })
    }
    return query.then( howtos => {
        return howtos.map( howto => map.toggleStep( howto ));
    });
};

// //GET INDIVIDUAL HOWTO
// function findById( id ) {
//     return db( 'howtos' )
//         .where({ id })
//         .first();
// };

//GET STEPS FUNCTION ⬇︎
function getSteps( howtoId ) {
    return db( 'steps' )
        .where( 'howtoId' , howtoId )
        .then( steps => steps.map( step => map.stepsToBody( step )));
}

//ADD HOWTO ⬇︎
function insert( howto ) {
    return db( 'howtos' )
        .insert( howto )
        .then(([ id ]) => {
            console.log( this )
            this.get( id )
        });
}

//UPDATE HOWTO ⬇︎
function update( id , changes ) {
    return db( 'howtos' )
        .where( 'id' , id )
        .update( changes )
        .then( count => ( count > 0 ? this.get( id ) : null ));
}

//DELETE HOWTO ⬇︎
function remove( id ) {
    return db( 'howtos' )
        .where( 'id' , id )
        .del();
}