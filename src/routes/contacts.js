import { Router } from "express";
import {
  insertContact,
  updateContact,
  selectContact,
  selectContacts,
  deleteContact,
  selectContactByEmail,
} from "../controllers/Contact.js";

const routerContacts = Router();
routerContacts
  .route("/")
  .put(updateContact)
  .post(insertContact)
  .get(selectContacts)
  .delete(deleteContact);

routerContacts.post("/search-for-name", selectContactByEmail);
routerContacts.get("/:id", selectContact);

export default routerContacts;
