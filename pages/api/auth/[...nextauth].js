import NextAuth from "next-auth";
import RedditProvider from "next-auth/providers/reddit";

export default NextAuth({
  // Configure one or more authentication providers
  //@todo   get the id and secret and update it on the env file
  providers: [
    RedditProvider({
      clientId: process.env.REDDIT_CLIENT_ID,
      clientSecret: process.env.REDDIT_CLIENT_SECRET,
    }),
    // Add more providers here
  ],
});
