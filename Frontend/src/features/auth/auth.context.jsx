// import { createContext,useState } from "react";


// export const AuthContext = createContext()


// export const AuthProvider = ({ children }) => { 

//     const [user, setUser] = useState(null)
//     const [loading, setLoading] = useState(true)

    


//     return (
//         <AuthContext.Provider value={{user,setUser,loading,setLoading}} >
//             {children}
//         </AuthContext.Provider>
//     )

    
// }
import { createContext, useState, useEffect } from "react";
import { getMe } from "./auth.api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => { 
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const data = await getMe();
                if (data?.user) {
                    setUser(data.user);
                }
            } catch (err) {
                // User is not logged in or token is missing/expired
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser, loading, setLoading }}>
            {children}
        </AuthContext.Provider>
    );
};