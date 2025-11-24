import express from 'express';
import ControllerCliente from '../controller/cliente.js';
import ControllerPet from '../controller/pet.js';

const router = express.Router();

// Rotas de Cliente
router.get('/clientes', ControllerCliente.FindAll)
router.get('/cliente/:id', ControllerCliente.FindOne)
router.post('/cliente', ControllerCliente.Create)
router.put('/cliente/:id', ControllerCliente.Update)
router.delete('/cliente/:id', ControllerCliente.Delete)

// // Rotas de pet
router.get('/pets', ControllerPet.FindAll)
router.get('/pet/:id', ControllerPet.FindOne)
router.post('/pet', ControllerPet.Create)
router.put('/pet/:id', ControllerPet.Update)
router.delete('/pet/:id', ControllerPet.Delete)

// // Rotas de Atendimento
// router.get('/atendimentos', ControllerAtendimento.FindAll)
// router.get('/atendimento/:id', ControllerAtendimento.FindOne)
// router.post('/atendimento', ControllerAtendimento.Create)
// router.put('/atendimento/:id', ControllerAtendimento.Update)
// router.delete('/atendimento/:id', ControllerAtendimento.Delete)
// router.get('/atendimentos/:id', ControllerAtendimento.getAtendimentosByPetId)

export default router;

