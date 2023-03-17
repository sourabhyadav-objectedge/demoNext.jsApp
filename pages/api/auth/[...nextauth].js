import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github"
import { Profiler } from "react";
export default  NextAuth({
    providers:[
        GitHubProvider({clientId:process.env.clientId,clientSecret:process.env.clientSecret})
    ],
    secret:process.env.JWT_KEY,
    session:{
        strategy:"jwt"
    },
   callbacks:{
        async jwt({token,profile})
        {
            if(profile)
            {   
                token.id=profile.id
            }
            return token;
        },
        async session({ session, token }) 
        {
            session.user.id=token.id
            return session
        }
     
   }
})
