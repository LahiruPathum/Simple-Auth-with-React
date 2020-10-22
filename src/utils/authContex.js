import React from 'react';
export const AuthContext = React.createContext({
    signIn:(name)=>{
        console.log('signIN')
    },
    signOut:()=>{
        console.log('signOUT')
    },
})