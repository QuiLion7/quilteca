import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import { AuthOptions } from "next-auth";
import prismaClient from "./prisma";
import { Adapter } from "next-auth/adapters";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prismaClient) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      session.user = { ...session.user, id: user.id } as {
        id: string;
        name: string;
        email: string;
      };
      return session;
    },
    // async signIn({ user }) {
    //   if (user.email && user.email.endsWith("@prof.ce.gov.br")) {
    //     return true;
    //   } else {
    //     throw new Error(
    //       "Apenas usuários com o domínio @prof.ce.gov.br podem fazer login.",
    //     );
    //   }
    // },
  },
};
