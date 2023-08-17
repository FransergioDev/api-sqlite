import {
  create,
  update,
  selectAll,
  selectById,
  selectByEmail,
  remove,
} from "../services/contact.js";
import Cache from "../config/cache.js";

export async function insertContact(req, res) {
  console.log(req.body);
  const contact = req.body;
  await create(contact)
    .then(() => res.json({ statusCode: 200 }))
    .catch((e) => res.json({ statusCode: 400, error: e }));
}

export async function updateContact(req, res) {
  console.log(req.body);
  if (req.body && !req.body.id)
    res.json({ statusCode: 400, messenger: "Você precisa informar id" });

  const contact = req.body;
  await update(contact)
    .then(() => res.json({ statusCode: 200 }))
    .catch((e) => res.json({ statusCode: 400, error: e }));
}

export async function selectContacts(req, res) {
  //console.log("req", req.baseUrl);

  const cache = new Cache();
  const cached = await cache.get(req.baseUrl);

  //console.log("cached", cached);

  if (cached) return res.json({ statusCode: 200, contacts: cached });

  await selectAll()
    .then((contacts) => {
      cache.set(req.baseUrl, contacts, 60 * 15);
      res.json({ statusCode: 200, contacts: contacts });
    })
    .catch((e) => res.json({ statusCode: 400, error: e }));
}

export async function selectContact(req, res) {
  if (req.params && !req.params.id)
    res.json({ statusCode: 400, messenger: "Você precisa informar id" });

  const id = req.params.id || 0;
  //console.log("req", `${req.baseUrl}/${id}`);

  const cache = new Cache();
  const cached = await cache.get(`${req.baseUrl}/${id}`);
  //console.log("cached:", cached);
  if (cached) return res.json({ statusCode: 200, contact: cached });

  await selectById(id)
    .then((contact) => {
      cache.set(`${req.baseUrl}/${id}`, contact, 60 * 15);
      res.json({ statusCode: 200, contact: contact });
    })
    .catch((e) => res.json({ statusCode: 400, error: e }));
}

export async function selectContactByEmail(req, res) {
  if (req.body && !req.body.email)
    res.json({
      statusCode: 400,
      messenger: "Você precisa informar o e-mail que deseja pesquisar",
    });

  const email = req.body.email || "";

  const cache = new Cache();
  const cached = await cache.get(`${req.baseUrl}/${email}`);
  //console.log("cached:", cached);
  if (cached) return res.json({ statusCode: 200, contact: cached });

  await selectByEmail(email)
    .then((contact) => {
      cache.set(`${req.baseUrl}/${email}`, contact, 60 * 15);
      res.json({ statusCode: 200, contact: contact });
    })
    .catch((e) => res.json({ statusCode: 400, error: e }));
}

export async function deleteContact(req, res) {
  if (req.params && !req.params.id)
    res.json({ statusCode: 400, messenger: "Você precisa informar id" });

  const id = req.params.id || 0;
  await remove(id)
    .then((res) => res.json({ statusCode: 200 }))
    .catch((e) => res.json({ statusCode: 400, error: e }));
}
