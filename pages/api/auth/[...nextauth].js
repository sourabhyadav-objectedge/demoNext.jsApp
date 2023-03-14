import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github"
export default  NextAuth({
    providers:[
        GitHubProvider({clientId:"c132a086807fe62040bd",clientSecret:"4372005cf06ae195edb57ac6058c438c82d5df37"})
    ]
})