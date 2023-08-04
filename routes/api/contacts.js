const express = require('express');

const ctrl = require('../../controllers/contacts');

const { validateBody } = require('../../middlewares');

const schemas = require('../../schemas/contacts');

const router = express.Router();

router.get('/', ctrl.getAll);

router.get('/:contactId', ctrl.getById);

router.post('/', validateBody(schemas.schema), ctrl.addContact);

router.delete('/:contactId', ctrl.deleteContact);

router.put('/:contactId', validateBody(schemas.schema), ctrl.updateContact);

module.exports = router;
