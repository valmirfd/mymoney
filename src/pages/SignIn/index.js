import React from "react";
import { View, Text } from "react-native";

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

export default function SignIn() {
    return (
        <Scrollar showsVerticalScrollIndicator={false}>
            <Container>
                <Logo
                    source={require("../../assets/logo.jpg")}
                    alt="Logo do app"
                />
                <AreaInput>
                    <Input
                        placeholder="Digite seu email"
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder="Digite sua senha"
                    />
                </AreaInput>

                <SubmitButton>
                    <SubmitText>Login</SubmitText>
                </SubmitButton>

                <Link>
                    <LinkText>Criar uma conta!</LinkText>
                </Link>


            </Container>
        </Scrollar>
    );
}