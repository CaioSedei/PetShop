import database from "../config/database.js"

class Cliente {
    constructor() {
        this.model = database.db.define('clientes', {
            id: {
                type: database.db.Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            nome: {
                type: database.db.Sequelize.STRING,
                allowNull: false
            },
            contato: {
                type: database.db.Sequelize.STRING,
                allowNull: false,
                unique: true
            }
        });
    }
}

export default new Cliente().model;
