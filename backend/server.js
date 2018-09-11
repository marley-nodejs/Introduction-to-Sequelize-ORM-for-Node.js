const express = require('express');
const Sequelize = require('sequelize');
// const Op = Sequelize.Op;
const _USERS = require('./users.json');

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

const User = connection.define('User', {
  name: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: Sequelize.STRING,
    validate: {
      isAlphanumeric: true
    }
  }
});

const Post = connection.define('Post', {
  id: {
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4
  },
  title: Sequelize.STRING,
  content: Sequelize.TEXT
});

app.get('/allposts', (req, res) => {
  Post.findAll({
    include: [User]
  })
    .then(posts => {
      res.json(posts);
    })
    .catch(error => {
      console.log(error);
      res.status(404).send(error);
    });
});

Post.belongsTo(User);

connection
  .sync({
    // logging: console.log,
    // force: true
  })
  .then(() => {
    Post.create({
      UserId: 1,
      title: 'First post',
      content: 'post content 1'
    });
  })
  // .then(() => {
  //   User.bulkCreate(_USERS)
  //     .then(users => {
  //       console.log('Success adding users');
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // })
  .then(() => {
    console.log('Connection to database established successfully');
  })
  .catch(err => {
    console.error('Unable to connect to the database: ', err);
  });

app.listen(port, () => {
  console.log('Running server on port ' + port);
});
