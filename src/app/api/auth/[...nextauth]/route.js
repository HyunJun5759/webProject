import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import clientPromise from "@/lib/mongodb";
import { checkPassword } from "@/lib/passwordCrypto";

const handler = NextAuth({
  providers: [
    Credentials({
      async authorize(credentials) {
        console.log("실행");
        const client = await clientPromise;

        const user = await client
          .db("User")
          .collection("UserAccount")
          .findOne({ email: credentials.email });

        if (!user) {
          throw new Error("이메일이나 비밀번호가 올바르지 않습니다");
        }

        const isValid = await checkPassword(
          user.password,
          user.salt,
          credentials.password
        );

        if (!isValid) {
          throw new Error("이메일이나 비밀번호가 올바르지 않습니다");
        }

        return { email: user.email, name: user.name };
      },
    }),
  ],
  // callbacks: {
  //   session: ({ session, token }) => ({
  //     ...session,
  //     user: {
  //       ...session.user,
  //       name: token.name,
  //     },
  //   }),
  // },

  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
