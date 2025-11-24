import database from "../config/database.js"

class Cliente {
    constructor() {
        this.model = database.db.define('clientes', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            nome: {
                type: DataTypes.STRING,
                allowNull: false
            },
            contato: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            }
        });
    }
}

export default new Cliente().model;
