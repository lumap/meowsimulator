import { Lucia } from "lucia";
import { dev } from "$app/environment";
import { Session, User } from "./db";
import { MongodbAdapter } from "@lucia-auth/adapter-mongodb";

const adapter = new MongodbAdapter(Session, User);

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    attributes: {
      secure: !dev,
    },
  },
  getUserAttributes: (attributes) => {
    return {
      username: attributes.username,
    };
  },
});

declare module "lucia" {
  interface Register {
    Lucia: typeof lucia;
    DatabaseUserAttributes: DatabaseUserAttributes;
  }
}

interface DatabaseUserAttributes {
  username: string;
}
