import React, { createContext, useState } from "react";

import api from '../services/api';
import { useNavigation } from "@react-navigation/native";


export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const navigation = useNavigation();

    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);



    async function signUp(nome, email, password) {
        setLoadingAuth(true);

        try {

            const response = await api.post('/users', {
                name: nome,
                email: email,
                password: password
            });

            setLoadingAuth(false);

            //Depois de cadastrar voltar para login
            navigation.goBack();

        } catch (err) {
            console.log("Erro ao cadastrar ", err);
            setLoadingAuth(false);
        }
    }

    async function signIn(email, password) {
        setLoadingAuth(true);

        try {

            const response = await api.post('/login', {
                email: email,
                password: password
            })

            const { id, name, token } = response.data;

            const data = {
                id,
                name,
                email,
                token,
            };

            api.defaults.headers['Authorization'] = `Bearer ${token}`;

            setUser({
                id,
                name,
                email,
            });

            setLoadingAuth(false);

        } catch (err) {
            console.log("Erro ao logar", err);
            setLoadingAuth(false);

        }
    }


    return (
        <AuthContext.Provider value={{ signed: !!user, user, signUp, signIn, loadingAuth }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;