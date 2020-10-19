import {Model, DataTypes} from 'sequelize'
import {database} from '../database/database'

export class Pergunta extends Model {
    id!: number;
    titulo!: string;
    descricao!:string;

}

Pergunta.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        titulo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descricao: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    },
    {
        tableName: "perguntas",
        sequelize: database,
    }
)

// force false = se a tabela ja existir ele não força a criação dela
Pergunta.sync({force: true}).then(() => {
    console.log("tabela criada")
})

module.exports = Pergunta