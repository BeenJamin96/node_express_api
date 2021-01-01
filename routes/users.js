import express from 'express';
import {createUser, getUsers, getUserById, deleteUser, patchUser} from '../controllers/users.js'  

const router = express.Router();

router.get('/', getUsers);

router.get('/:id', getUserById);

router.post('/', createUser);

router.delete('/:id', deleteUser);

router.patch('/:id', patchUser);

export default router;