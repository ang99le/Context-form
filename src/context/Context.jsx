import{ createContext,useState } from "react";

const Context =createContext()

export function Userprovider({children}){

    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [birthday,setBirthday]=useState('');

    return (
    <Context.Provider value={{username,password,birthday,setUsername,setPassword,setBirthday}}>{children}</Context.Provider>
    )
};

export default Context;