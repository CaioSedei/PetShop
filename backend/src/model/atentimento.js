import database from "../config/database.js"

class Atendimento {
    constructor() {
        this.model = database.db.define('atendimentos', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            data: {
                type: DataTypes.DATE,
                allowNull: false
            },
            valor: {
                type: DataTypes.DECIMAL,
                allowNull: false
            },
            concluido: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false
            },
            petId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'pets',
                    key: 'id'
                }
            }
        });
    }
}

export default new Atendimento().model;
