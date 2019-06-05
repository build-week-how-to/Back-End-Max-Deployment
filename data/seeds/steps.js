
//SEEDS ⬇︎
exports.seed = function(knex, Promise) {
  return knex('steps').insert([
    {
      howtoId: 1,
      description: 'Add water'
    },
    {
      howtoId: 1,
      description: 'add stuff'
    },
    {
      howtoId: 1,
      description: 'Vwala you have slime'
    }
  ]);
};
