import {Sequelize} from 'sequelize'

export const database = new Sequelize({
    database: "guiaperguntasTS",
    dialect: "mariadb",
    username:"root",
    password:"",
    host: "localhost",
    port: 3306

})

 