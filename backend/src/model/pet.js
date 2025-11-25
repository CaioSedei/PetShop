import database from "../config/database.js"
import Cliente from './cliente.js'

class Pet {
    constructor() {
        this.model = database.db.define('pets', {
            id: {
                type: database.db.Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            nome: {
                type: database.db.Sequelize.STRING,
                allowNull: false
            },
            raca: {
                type: database.db.Sequelize.STRING,
                allowNull: false
            },
            sexo: {
                type: database.db.Sequelize.STRING,
                allowNull: false
            },
            porte: {
                type: database.db.Sequelize.STRING,
                allowNull: false
            },
            clienteId: {
                type: database.db.Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'clientes',
                    key: 'id'
                }
            }
        });

        this.model.belongsTo(Cliente, { foreignKey: 'clienteId' });
        Cliente.hasMany(this.model, { foreignKey: 'clienteId', onDelete: 'CASCADE' });

    }
}

export default new Pet().model;
