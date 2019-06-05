
//IMPORTS ⬇︎
const db = require( '../../data/dbConfig' );

//EXPORTS ⬇︎
module.exports = {
    add,
    find,
    findBy,
    findById
};

//FUNCTIONS ⬇︎
function find() {

    return db( 'users' );

};

function findBy( user ) {

    return db( 'users' ).where( user );

};

async function add( user ) {

    const [ id ] = await db( 'users' ).insert( user );
    return ( findById( id ));

};

function findById( id ) {

    return db( 'users' )
        .select( 'id' , 'username' )
        .where({ id })
        .first();
        
};