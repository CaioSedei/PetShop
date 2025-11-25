import database from "../config/database.js"
import Pet from './pet.js'

class Atendimento {
    constructor() {
        this.model = database.db.define('atendimentos', {
            id: {
                type: database.db.Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            data: {
                type: database.db.Sequelize.DATE,
                allowNull: false
            },
            valor: {
                type: database.db.Sequelize.DECIMAL,
                allowNull: false
            },
            concluido: {
                type: database.db.Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false
            },
            petId: {
                type: database.db.Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'pets',
                    key: 'id'
                }
            }
        });

        this.model.belongsTo(Pet, { foreignKey: 'petId' });
        Pet.hasOne(this.model, { foreignKey: 'petId', onDelete: 'CASCADE' });

    }
}

export default new Atendimento().model;
