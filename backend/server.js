const express = require('express');
const Sequelize = require('sequelize');

const app = express();
const port = 3000;

const connection = new Sequelize('db', 'user', 'pass', {
  host: 'localhost',
  dialect: 'sqlite',
  storage: 'db.sqlite',
  operatorsAliases: false,
  define: {
    freezeTableName: true
  }
});

const User = connection.define(
  'User',
  {
    uuid: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      validate: {
        len: [3]
      }
    },
    bio: {
      type: Sequelize.TEXT,
      validate: {
        contains: {
          args: ['foo'],
          msg: 'Error: Field must contain foo'
        }
      }
    }
  },
  {
    timestamps: false
  }
);

app.get('/', (req, res) => {
  User.create({
    name: 'Jo',
    bio: 'New bio entry'
  })
    .then(user => {
      res.json(user);
    })
    .catch(error => {
      console.log(error);
      res.status(404).send(error);
    });
});

connection
  .sync({
    logging: console.log,
    force: true
  })
  .then(() => {
    // User.create(
    //   {
    //     name: 'Joe',
    //     bio: 'New bio entry'
    //   }
    // );
  })
  .then(() => {
    console.log('Connection to database established successfully');
  })
  .catch(err => {
    console.error('Unable to connect to the database: ', err);
  });

app.listen(port, () => {
  console.log('Running server on port ' + port);
});
