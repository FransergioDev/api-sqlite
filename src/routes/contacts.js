
import { Router } from 'express';
import { createTableContact, insertContact, updateContact, selectContact, selectContacts, deleteContact} from '../controllers/Contact.js'

await createTableContact();

const routerContacts = Router();
routerContacts.route('/')
    .put(updateContact)
    .post(insertContact)
    .get(selectContacts)
    .delete(deleteContact)

routerContacts.get('/:id', selectContact);

export default routerContacts;


