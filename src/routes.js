import { Router } from 'express';
import routerContacts from "./routes/contacts.js";

const version = '1';
const router = Router();


router.get('/', (req, res) => res.send(`API de Contatos em NodeJS, Express e SqLite. Versão: ${version}`));
router.use(`/v${version}/contacts`, routerContacts);

/*
  router.route('/contacts', routerContacts)
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