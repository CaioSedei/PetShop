// mudar para atendimento

// import ServiceCliente from '../service/cliente.js'

// class ControllerCliente {

//     FindAll(_, res) {
//         try {
//             const service = ServiceCliente.FindAll()
//             console.log("Listando todos os clientes")
//             res.status(200).send({ service })
//         } catch (error) {
//             res.status(500).send({ error: error.message })
//         }
//     }

//     FindOne(req, res) {
//         try {
//             const service = ServiceCliente.FindOne()
//             console.log("Listando todos os clientes")
//             res.status(200).send({ service })
//         } catch (error) {
//             res.status(500).send({ error: error.message })
//         }
//     }

//     Create(req, res) {
//         try {
//             const service = ServiceCliente.Create()
//             console.log("Listando todos os clientes")
//             res.status(200).send({ service })
//         } catch (error) {
//             res.status(500).send({ error: error.message })
//         }
//     }

//     Update(req, res) {
//         try {
//             const service = ServiceCliente.Update()
//             console.log("Listando todos os clientes")
//             res.status(200).send({ service })
//         } catch (error) {
//             res.status(500).send({ error: error.message })
//         }
//     }

//     Delete(req, res) {
//         try {
//             const service = ServiceCliente.Delete()
//             console.log("Listando todos os clientes")
//             res.status(200).send({ service })
//         } catch (error) {
//             res.status(500).send({ error: error.message })
//         }
//     }

// }

// export default new ControllerCliente()