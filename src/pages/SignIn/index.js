import React, { useState, useContext } from "react";
import { Platform } from "react-native";

import {
    Scrollar,
    Container,
    Logo,
    AreaInput,
    Input,
    SubmitButton,
    SubmitText,
    Link,
    LinkText,
} from './styles';

import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../contexts/auth";


export default function SignIn() {
    const navigation = useNavigation();
    const { signIn, loadingAuth } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin() {
        if (email === '' || password === '') return;

        signIn(email, password);

    }


    return (
        <Scrollar showsVerticalScrollIndicator={false}>
            <Container
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
                enabled
            >
                <Logo
                    source={require("../../assets/logo.jpg")}
                    alt="Logo do app"
                />
                <AreaInput>
                    <Input
                        placeholder="Digite seu email"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder="Digite sua senha"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                </AreaInput>

                <SubmitButton activeOpacity={0.8} onPress={handleLogin}>
                    <SubmitText>Login</SubmitText>
                </SubmitButton>

                <Link onPress={() => navigation.navigate('SignUp')}>
                    <LinkText>Criar uma conta!</LinkText>
                </Link>


            </Container>
        </Scrollar>
    );
}