const Sequelize = require('sequelize');

const sequelize = new Sequelize('clase4', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });



  const Model = Sequelize.Model;
  class User extends Model {}
  User.init({
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING
    }
  }, {
    sequelize,
    modelName: 'user'
  });



  /* crea los registros */
  sequelize.sync()
  .then(() => {
      return User.create({
        id: 1,
        firstName: 'Gabriel',
        lastName: 'Batistuta'
      }),
      User.create({
        id: 2,
        firstName: 'Ronaldo',
        lastName: 'Nazario'
      }),
      User.create({
        id: 3,
        firstName: 'Patrick',
        lastName: 'Kluivert'
      })
    }
  )  
  .then(usuario => {
      console.log(usuario.toJSON());
      return User.update({firstName: "Roberto", lastName: "Carlos" }, { /* Actualiza nombre y apellido del registro que tiene como apellido "Batistuta" */
        where: {
          lastName: 'Batistuta',
        }
      }),
      User.update({firstName: "Fernando", lastName: "Redondo" }, { /* Actualiza nombre y apellido del registro que tiene como apellido "Nazario" */
        where: {
          lastName: 'Nazario',
        }
      }),
      User.update({firstName: "Michael", lastName: "Owen" }, { /* Actualiza nombre y apellido del registro que tiene como apellido "Kluivert" */
        where: {
          lastName: 'Kluivert',
        }
      })
    }
  )
  .then(() => {
    console.log("Actualice Registros");
  })
  .catch((error) => {
      console.log(error)
    }
  );







