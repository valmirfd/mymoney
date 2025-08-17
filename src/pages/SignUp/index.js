import React, { useContext } from "react";
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
} from '../SignIn/styles';

import { useNavigation } from "@react-navigation/native";

import { AuthContext } from "../../contexts/auth";


export default function SignUp() {
    const navigation = useNavigation();

    const { user } = useContext(AuthContext);

    function handleSignUp(){
        console.log(user);
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
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder="Digite seu email"
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder="Digite a senha"
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder="Confirme a senha"
                    />
                </AreaInput>

                <SubmitButton onPress={handleSignUp}>
                    <SubmitText>Cadastrar</SubmitText>
                </SubmitButton>

                <Link onPress={() => navigation.navigate('SignIn')}>
                    <LinkText>Já tenho conta!</LinkText>
                </Link>


            </Container>
        </Scrollar>
    );
}