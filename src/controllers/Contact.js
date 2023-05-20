import { openDb } from "../../config/configDB.js";

export async function createTableContact() {
    await openDb().then(db => {
        try {
            db.exec(`CREATE TABLE IF NOT EXISTS Contact (
                id INTEGER PRIMARY KEY,
                name TEXT,
                mail TEXT,
                address TEXT,
                telephone INTEGER,
                cellphone INTEGER
            )`);
        } catch (error) {
            throw new Error(error);
        }
    }).catch((e) => new Error(error));
}

export async function insertContact(req, res) {
    console.log(req.body);
    const contact = req.body;
    await openDb().then(db => {
        return db.run(`INSERT INTO Contact (name, mail, address, telephone, cellphone) VALUES (?,?,?,?,?)`, [
            contact.name,
            contact.mail,
            contact.address,
            contact.telephone,
            contact.cellphone
        ])
        .then(() => res.json({"statusCode" : 200}))
        .catch((e) => res.json({"statusCode" : 400, "error": e}));
    }).catch((e) => res.json({"statusCode" : 500, "error": e}));
}

export async function updateContact(req, res) {
    console.log(req.body);
    if (req.body && !req.body.id) res.json({"statusCode" : 400, "messenger": "Você precisa informar id"})

    const contact = req.body;
    await openDb().then(db => {
        return db.run(`UPDATE Contact SET ((name=?, mail=?, address=?, telephone=?, cellphone=? WHERE id=?`, [
            contact.name,
            contact.mail,
            contact.address,
            contact.telephone,
            contact.cellphone,
            contact.id
        ])
        .then(() => res.json({"statusCode" : 200}))
        .catch((e) => res.json({"statusCode" : 400, "error": e}));
    }).catch((e) => res.json({"statusCode" : 500, "error": e}));
}

export async function selectContacts(req, res) {
    await openDb().then(db => {
        return db.all(`SELECT * FROM Contact`)
            .then((contacts) => res.json({"statusCode" : 200, "contacts": contacts}))
            .catch((e) => res.json({"statusCode" : 400, "error": e}));   
    }).catch((e) => res.json({"statusCode" : 400, "error": e}));
}

export async function selectContact(req, res) {
    if (req.params && !req.params.id) res.json({"statusCode" : 400, "messenger": "Você precisa informar id"});
    
    const id = req.params.id | 0;
    await openDb().then(db => {
        return db.get(`SELECT * FROM Contact WHERE id=?`, [id])
            .then((contact) => res.json({"statusCode" : 200, "contact": contact}))
            .catch((e) => res.json({"statusCode" : 400, "error": e}));
    }).catch((e) => res.json({"statusCode" : 500, "error": e}));
}

export async function deleteContact(req, res) {
    if (req.params && !req.params.id) res.json({"statusCode" : 400, "messenger": "Você precisa informar id"});

    const id = req.params.id | 0;
    await openDb().then(db => {
        return db.get(`DELETE  FROM Contact WHERE id=?`, [id])
            .then((res) => res.json({"statusCode" : 200}))
            .catch((e) => res.json({"statusCode" : 400, "error": e}));
    }).catch((e) => res.json({"statusCode" : 500, "error": e}));
}

