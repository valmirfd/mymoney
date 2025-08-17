import styled from "styled-components/native";

export const Scrollar = styled.ScrollView`
    flex: 1;
    background-color: #76E6DA;
`;

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.Image`
    margin-bottom: 25px;
    width: 200px;
    height: 200px;
`;

export const AreaInput = styled.View`
    flex-direction: row;
`;

export const Input = styled.TextInput`
    background-color: #48C1B6;
    width: 90%;
    height: 46px;
    font-size: 17px;
    padding: 10px;
    border-radius: 8px;
    color: #FFF;
    margin-bottom: 16px;
`;

export const SubmitButton = styled.TouchableOpacity`
    width: 90%;
    height: 50px;
    border-radius: 8px;
    background-color: #1A9B91;
    margin-top: 16px;
    align-items: center;
    justify-content: center;
`;

export const SubmitText = styled.Text`
    font-size: 20px;
    color: #FFF;
`;

export const Link = styled.TouchableOpacity`
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const LinkText = styled.Text`
    color: #1A9B91;
    font-weight: bold;
    font-size: 16px;
`;

