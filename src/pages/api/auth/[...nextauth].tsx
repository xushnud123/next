import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_ID || "",
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET || "",
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: "jwt",
  },
  secret: "xushnudbek",
  callbacks: {
    // @ts-ignore
    async jwt({ token, account, profile }) {
      if (account && profile) {
        console.log("token,user", token, account);
        token.accessToken = account.access_token;
        // @ts-ignore
        token.id = profile.id || "";
      }
      return token;
    },
    // @ts-ignore
    async session({ session, token, user }) {
      // @ts-ignore
      session.accessToken = token.accessToken;
      // @ts-ignore
      session.user.id = token.id;

      return session;
    },
  },
});
