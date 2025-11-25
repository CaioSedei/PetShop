import Pet from '../model/pet.js'

class ServicePet {


    FindAll() {
        return Pet.findAll()
    }


    async FindOne(id) {
        if (!id) {
            throw new Error('Favor informar o ID')
        }
        const pet = await Pet.findByPk(id)

        if (!pet) {
            throw new Error("Usuário não encontrado")
        }

        return pet
    }


    async Create(nome, raca, sexo, porte, clienteId) {
        if (!nome || !raca || !sexo || !porte || !clienteId) {
            throw new Error('Favor preencher todos os campos')
        }

        await Pet.create({
            nome, raca, sexo, porte, clienteId
        })
    }


    async Update(id, nome, raca, sexo, porte, clienteId) {
        const oldPet = await Pet.findByPk(id)
        oldPet.nome = nome || oldPet.nome
        oldPet.raca = raca || oldPet.raca
        oldPet.sexo = sexo || oldPet.sexo
        oldPet.porte = porte || oldPet.porte
        oldPet.clienteId = clienteId || oldPet.clienteId

        oldPet.save()
    }



       async Delete(id) {
        if (!id) {
            throw new Error("Informar ID valido")
        }

        const pet = await Pet.findByPk(id)

        if (!pet) {
            throw new Error(`usuário ${id} não foi encontrado`)
        }

        await pet.destroy()
    }


}

export default new ServicePet()