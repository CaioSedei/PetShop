import ServiceAtendimento from '../service/atentimento.js'

class ControllerAtendimento {

    FindAll(_, res) {
        try {
            const service = ServiceAtendimento.FindAll()
            console.log("Listando todos os clientes")
            res.status(200).send({ service })
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }

    FindOne(req, res) {
        try {
            const service = ServiceAtendimento.FindOne()
            console.log("Listando todos os clientes")
            res.status(200).send({ service })
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }

    Create(req, res) {
        try {
            const service = ServiceAtendimento.Create()
            console.log("Listando todos os clientes")
            res.status(200).send({ service })
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }

    Update(req, res) {
        try {
            const service = ServiceAtendimento.Update()
            console.log("Listando todos os clientes")
            res.status(200).send({ service })
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }

    Delete(req, res) {
        try {
            const service = ServiceAtendimento.Delete()
            console.log("Listando todos os clientes")
            res.status(200).send({ service })
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }

}

export default new ControllerAtendimento()