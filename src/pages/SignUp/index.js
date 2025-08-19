import React, { useContext, useState } from "react";
import { Platform, ActivityIndicator } from "react-native";

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
} from '../SignIn/styles';

import { useNavigation } from "@react-navigation/native";

import { AuthContext } from "../../contexts/auth";


export default function SignUp() {
    const navigation = useNavigation();
    const { signIn, loadingAuth } = useContext(AuthContext);

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSignUp() {
        if (nome === '' || email === '' || password === '') return;

        signUp(nome, email, password);
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
                        placeholder="Digite seu nome"
                        value={nome}
                        onChangeText={(text) => setNome(text)}
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder="Digite seu email"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder="Digite a senha"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={true}
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder="Confirme a senha"
                    />
                </AreaInput>

                <SubmitButton onPress={handleSignUp}>

                    {
                        loadingAuth ? (
                            <ActivityIndicator size={20} color="#76E6DA" />
                        ) : (
                            < SubmitText > Cadastrar</SubmitText>
                        )
                    }


                </SubmitButton>

                <Link onPress={() => navigation.navigate('SignIn')}>
                    <LinkText>Já tenho conta!</LinkText>
                </Link>


            </Container>
        </Scrollar >
    );
}