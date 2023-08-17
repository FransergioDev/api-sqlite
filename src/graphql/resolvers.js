import {
  create,
  remove,
  selectAll,
  selectByEmail,
  selectById,
  update,
} from "../services/contact.js";

export default {
  Query: {
    hello: () => "Hello Word",
    contacts: async () => await selectAll(),
    contact: async (_, args) => await selectById(args.id),
    contactByEmail: async (_, args) => await selectByEmail(args.email),
  },
  Mutation: {
    createContact: async (_, args) =>
      await create(
        args.name,
        args.email,
        args.address,
        args.telephone,
        args.cellphone
      ),
    updateContact: async (_, args) =>
      await update(
        args.name,
        args.email,
        args.address,
        args.telephone,
        args.cellphone
      ),
    deleteContact: async (_, args) => await remove(args.id),
  },
};

/*,

  */
