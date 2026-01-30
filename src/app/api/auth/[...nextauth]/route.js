import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
  jwt: { encryption: false },

  pages: {
    signIn: "/sign-in",
  },

  providers: [
    Credentials({
      async authorize(credentials) {
        if (
          credentials.email === "user@finloge.com" &&
          credentials.password === "123456"
        ) {
          return {
            id: "1",
            email: "admin@example.com",
            name: "Admin",
          };
        }
        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
