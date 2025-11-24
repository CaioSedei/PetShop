import database from "../config/database.js"

class Pet {
    constructor() {
        this.model = database.db.define('pets', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            nome: {
                type: DataTypes.STRING,
                allowNull: false
            },
            raca: {
                type: DataTypes.STRING,
                allowNull: false
            },
            sexo: {
                type: DataTypes.STRING,
                allowNull: false
            },
            porte: {
                type: DataTypes.STRING,
                allowNull: false
            },
            clienteId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'clientes',
                    key: 'id'
                }
            }
        });
    }
}

export default new Pet().model;
