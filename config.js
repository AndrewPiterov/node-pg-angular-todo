var connectionString = process.env.DATABASE_URL || 'postgres://ubuntu:1@localhost:5432/todo';

module.exports = connectionString;