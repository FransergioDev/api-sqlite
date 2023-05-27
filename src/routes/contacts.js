
import { Router } from 'express';
import { insertContact, updateContact, selectContact, selectContacts, deleteContact} from '../controllers/Contact.js'

const routerContacts = Router();
routerContacts.route('/')
    .put(updateContact)
    .post(insertContact)
    .get(selectContacts)
    .delete(deleteContact)

routerContacts.get('/:id', selectContact);

export default routerContacts;


