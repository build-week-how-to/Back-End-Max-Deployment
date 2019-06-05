// Update with your config settings.

//different environments
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/howTo.db3'
    },
    useNullAsDefault: true,
    pool: {
      afterCreate: ( conn , done ) => {
        conn.run( 'PRAGMA foreign_keys = ON' , done )
      }
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },

  //TESTS SETUP ⬇︎
  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data/tests.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }
};
