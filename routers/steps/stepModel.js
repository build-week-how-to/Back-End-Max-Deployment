
//IMPORTS
const db = require('../../data/dbConfig.js');
const map = require('../../data/helpers/mappers');

//EXPORTS
module.exports = {
    get,
    add,
    update,
    remove
}

//GET ALL ACTIONS
function get( id ) {
    let query = db( 'steps' );
    if ( id ) {
        return query
            .where( 'steps.id' , id )
            .first()
            .then( step => map.toggleStep( step ))
    }
    return query.then( steps => {
        return steps.map( step => map.toggleStep( step ))
    })
};
    
function add (step) {
    return db('steps')
        .insert(step)
        .then(([id]) => this.get(id));
};

function update (id, changes) {
    return db('steps')
        .where( 'id' , id)
        .update(changes)
        .then(count => (count > 0 ? this.get(id) : null));
};

function remove (id) {
    return db('steps')
        .where('id', id)
        .del();
};