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
} from '../SignIn/styles';

export default function SignUp() {
    return (
        <Scrollar showsVerticalScrollIndicator={false}>
            <Container>
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
                        placeholder="Digite sua senha"
                    />
                </AreaInput>

                <AreaInput>
                    <Input
                        placeholder="Confirme a senha"
                    />
                </AreaInput>

                <SubmitButton>
                    <SubmitText>Cadastrar</SubmitText>
                </SubmitButton>

                <Link>
                    <LinkText>Já tenho conta!</LinkText>
                </Link>


            </Container>
        </Scrollar>
    );
}