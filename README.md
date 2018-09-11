# [Patrick Schroeder] Introduction to Sequelize ORM for Node.js [ENG, 2018]

<br/>

## 03 - Sequelize Setup

    $ mkdir backend
    $ cd backend/
    $ touch server.js
    $ npm init -y

    $ npm install --save express sequelize sqlite3

    $ npm install --save-dev eslint
    $ node ./node_modules/eslint/bin/eslint.js --init

    > Use a popular style guide
    > Google (https://github.com/google/eslint-config-google)
    > What format do you want your config file to be in? file
    > Would you like to install them now with npm? Yes

<br/>

    $ npm start

IDE - https://sqlitebrowser.org/

<br/>

![Application](/img/pic3-1.png?raw=true)

<br/>

## 04 - Customize and Validate

<br/>

### 22. Validations

<br/>

![Application](/img/pic4-1.png?raw=true)

<br/>

### 23. Hooks

<br/>

## 05 - Performing CRUD Operations

<br/>

### 26. Add Sample Data

<br/>

generatedata.com

<br/>

![Application](/img/pic5-1.png?raw=true)

<br/>

### 27. Create Method

<br/>

### 28. Find All and Filter

<br/>

![Application](/img/pic5-2.png?raw=true)

<br/>

### 29. Find One Entry

http://localhost:3000/findOne

<br/>

### 30. Update Entry

    $ curl -X PUT localhost:3000/update

<br/>

### 31. Delete Entry

    $ curl -X DELETE localhost:3000/remove

<br/>

## 06 - Associations

<br/>

### 35. Add belongsTo Association

http://localhost:3000/allposts

<br/>

![Application](/img/pic6-1.png?raw=true)

<br/>

### 36. Foreign Keys

<br/>

### 37. Model Alias

<br/>

![Application](/img/pic6-2.png?raw=true)

<br/>

### 38. Types of Associations

<br/>

![Application](/img/pic6-3.png?raw=true)

<br/>

### 39. One-to-Many Association

<br/>

![Application](/img/pic6-4.png?raw=true)

<br/>

### 40. Many-to-Many Association

<br/>

### 41. Many-to-Many Example

    $ curl -X PUT localhost:3000/addWorker

 <br/>

![Application](/img/pic6-5.png?raw=true)

---

**Marley**

<a href="https://labs.jsdev.org">labs.jsdev.org</a>
