
//HOW TO SEEDS ⬇︎
exports.seed = function(knex, Promise) {

  return knex( 'howtos' ).truncate()
    .then( function() {
      return knex('howtos').insert([
        {
          title: 'Slime'
        }
      ]);
    })
    
};
