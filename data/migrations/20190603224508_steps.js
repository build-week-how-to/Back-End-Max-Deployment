
//TABLE SETUP ⬇︎
exports.up = function(knex, Promise) {
    return knex.schema.createTable( 'steps' , steps => {
        steps.increments()
        steps.integer( 'step' ).notNullable()
        steps.integer( 'howtoId' ).unsigned();
        steps.foreign( 'howtoId' ).references( 'id' ).on( 'howtos' )
    });
};

//DROP IF EXISTS ⬇︎
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists( 'steps' );
};