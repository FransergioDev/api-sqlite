import { openDb } from "../config/configDB.js";

export async function createTableContact() {
  await openDb()
    .then((db) => {
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
    })
    .catch((e) => new Error(e));
}

export async function create(contact) {
  return new Promise(async (pResolve, pReject) => {
    await createTableContact();
    await openDb()
      .then((db) => {
        return db
          .run(
            `INSERT INTO Contact (name, mail, address, telephone, cellphone) VALUES (?,?,?,?,?)`,
            [
              contact.name,
              contact.mail,
              contact.address,
              contact.telephone,
              contact.cellphone,
            ]
          )
          .then(() => pResolve())
          .catch((e) => pReject(e));
      })
      .catch((e) => pReject(e));
  });
}

export async function update(contact) {
  return new Promise(async (pResolve, pReject) => {
    await createTableContact();
    await openDb()
      .then((db) => {
        return db
          .run(
            `UPDATE Contact SET ((name=?, mail=?, address=?, telephone=?, cellphone=? WHERE id=?`,
            [
              contact.name,
              contact.mail,
              contact.address,
              contact.telephone,
              contact.cellphone,
              contact.id,
            ]
          )
          .then(() => pResolve())
          .catch((e) => pReject(e));
      })
      .catch((e) => pReject(e));
  });
}

export async function selectAll() {
  return new Promise(async (pResolve, pReject) => {
    await createTableContact();
    await openDb()
      .then((db) => {
        return db
          .all(`SELECT * FROM Contact`)
          .then((contacts) => pResolve(contacts))
          .catch((e) => pReject(e));
      })
      .catch((e) => pReject(e));
  });
}

export async function selectById(id) {
  return new Promise(async (pResolve, pReject) => {
    await createTableContact();
    await openDb()
      .then((db) => {
        return db
          .get(`SELECT * FROM Contact WHERE id=?`, [id])
          .then((contact) => pResolve(contact))
          .catch((e) => pReject(e));
      })
      .catch((e) => pReject(e));
  });
}

export async function selectByEmail(email) {
  return new Promise(async (pResolve, pReject) => {
    await createTableContact();
    await openDb()
      .then((db) => {
        return db
          .get(`SELECT * FROM Contact WHERE mail=?`, [email])
          .then((contact) => pResolve(contact))
          .catch((e) => pReject(e));
      })
      .catch((e) => pReject(e));
  });
}

export async function remove(id) {
  return new Promise(async (pResolve, pReject) => {
    await createTableContact();
    await openDb()
      .then((db) => {
        return db
          .get(`DELETE  FROM Contact WHERE id=?`, [id])
          .then((res) => pResolve())
          .catch((e) => pReject(e));
      })
      .catch((e) => pReject());
  });
}
