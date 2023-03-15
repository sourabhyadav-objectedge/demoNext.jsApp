import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github"
export default  NextAuth({
    providers:[
        GitHubProvider({clientId:process.env.clientId,clientSecret:process.env.clientSecret})
    ],
    secret:process.env.clientSecret
})