import React from "react";
import { View, Text } from "react-native";

import {
    Background,
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
        <Background>
            <Container>

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
                    <LinkText>Já tenho uma conta!</LinkText>
                </Link>


            </Container>
        </Background>
    );
}