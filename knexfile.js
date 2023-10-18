module.exports = {
    development: {
      client: 'pg',
      connection: {
        user: 'mdomerarafat',
        host: 'localhost',
        database: 'instagram',
        password: '',
      },
      migrations: {
        directory: __dirname + '/src/migrations',
      },
    },
  };