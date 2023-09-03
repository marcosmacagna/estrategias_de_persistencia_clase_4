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


/* crea un registro*/
sequelize.sync()
  .then(() => {
      return User.create({
        id: 1,
        firstName: 'Luis',
        lastName: 'Enrique'
      })
    }
  )  
  .then(usuario => {
      console.log(usuario.toJSON());
      return User.destroy({    /* elimina el registro con id = 1 */
        where: {
          id: 1
        }
      })
    }
  )
  .then(() => {
    console.log("Elimine Registro");
  })
  .catch((error) => {
      console.log(error)
    }
  );  






