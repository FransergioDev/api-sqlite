import { Router } from 'express';
import { createTableContact, insertContact, updateContact, selectContact, selectContacts, deleteContact} from './controllers/Contact.js';

const router = Router();

await createTableContact();

router.get('/api/v1', (req, res) => {
    res.send("versão 1.0");
});


router.get('/contacts', selectContacts);
router.get('/contacts/:id', selectContact);
router.post('/contacts', insertContact);

/*
app.get('/contacts', async (req, res) => {
    await selectContacts(req.body).then((contacts) => {
        res.json({"statusCode" : 200, "contacts": contacts});
    }).catch((e) => res.json({"statusCode" : 400, "error": e}));
});
app.get('/contacts/:id', async (req, res) => {
    await selectContact(req.params.id).then((contact) => {
        res.json({"statusCode" : 200, "contact": contact});
    }).catch((e) => res.json({"statusCode" : 400, "error": e}));
});
app.post('/contacts', (req, res) => {
    console.log(req.body);
    insertContact(req.body).then(() => res.json({"statusCode" : 200})).catch((e) => res.json({"statusCode" : 400, "error": e}));
});
app.put('/contacts',(req, res) => {
    console.log(req.body);
    if (req.body && !req.body.id) res.json({"statusCode" : 400, "messenger": "Você precisa informar id"})
    updateContact(req.body).then(() => res.json({"statusCode" : 200})).catch((e) => res.json({"statusCode" : 400, "error": e}));
});
app.delete('/contacts', (req, res) => {
    console.log(req.body);
    if (req.body && !req.body.id) res.json({"statusCode" : 400, "messenger": "Você precisa informar id"})
    deleteContact(req.body.id).then(() => res.json({"statusCode" : 200})).catch((e) => res.json({"statusCode" : 400, "error": e}));
});*/

export default router;