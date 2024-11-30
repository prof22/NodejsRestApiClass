const express = require('express');
const UserController = require('../Controller/userController');

const router = express.Router();


router.post('/',UserController.create);
router.get('/',UserController.getAllRecord);
router.get('/:id', UserController.getUserById);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);


module.exports = router;
// Create, Read, Update and Delete using API
// CRUD