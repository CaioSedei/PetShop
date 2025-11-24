import ServicePet from '../service/pet.js'

class ControllerPet {
    FindAll(_, res) {
        try {
            const service = ServicePet.FindAll()
            console.log("Listando todos os clientes")
            res.status(200).send({ service })
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }

    FindOne(req, res) {
        try {
            const service = ServicePet.FindOne()
            console.log("Listando todos os clientes")
            res.status(200).send({ service })
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }

    Create(req, res) {
        try {
            const service = ServicePet.Create()
            console.log("Listando todos os clientes")
            res.status(200).send({ service })
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }

    Update(req, res) {
        try {
            const service = ServicePet.Update()
            console.log("Listando todos os clientes")
            res.status(200).send({ service })
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }

    Delete(req, res) {
        try {
            const service = ServicePet.Delete()
            console.log("Listando todos os clientes")
            res.status(200).send({ service })
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }

}

export default new ControllerPet()
