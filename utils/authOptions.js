import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: 'consent',
                    access_type: 'offline',
                    response_type: 'code'
                }
            }

        })
    ],
    callbacks: {
        //Invoked on succeful sign in
        async signIn({ profile }) {
            //Connect to database
            //Check if user exists
            //if not create user
            //return true to allow signIn
        },
        //Session calback function that modifiest the session object
        async session({ session }) {
            //Get iser from database
            // Assign user id from the session
            //return session
        }
    }
}