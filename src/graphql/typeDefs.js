import { gql } from "apollo-server";

export default gql`
  type Query {
    hello: String!
  }
  type Contact {
    id: ID!
    name: String!
    mail: String!
    address: String!
    telephone: Int!
    cellphone: Int!
  }

  type Query {
    contacts: [Contact!]!
    contact(id: ID!): Contact
    contactByEmail(email: String!): Contact
  }
  input ContactInput {
    name: String!
    mail: String
    address: String
    telephone: Int
    cellphone: Int
  }
  type Mutation {
    createContact(data: ContactInput!): Contact!
    updateContact(data: ContactInput!): Contact!
    deleteContact(id: ID!): Boolean
  }
`;

/*

*/
