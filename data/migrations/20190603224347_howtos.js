
//TABLE SETUP ⬇︎
exports.up = function(knex, Promise) {
    
    return knex.schema.createTable( 'howtos' , howto => {
        howto.increments();
        howto.string( 'url' );
        howto.string( 'title' ).notNullable();
        howto.timestamps( true , true )
    })

};

//DROP IF EXISTS ⬇︎
exports.down = function(knex, Promise) {

    return knex.schema.dropTableIfExists( 'howtos' );
    
};
