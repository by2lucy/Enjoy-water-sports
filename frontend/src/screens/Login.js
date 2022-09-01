import React from 'react';
import { TouchableWithoutFeedback,Keyboard,ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Dimensions } from 'react-native';
import { StyleSheet, Text,View, Button } from 'react-native';
import { Image,TextInput } from 'react-native';
import Home from './Home';
import kakaoLogin from './kakaoLogin';
import RegisterPage from './RegisterPage';
import { useState } from 'react';

const { width } = Dimensions.get('window')

const styles = {
    wrapper: {
    },

    button: {
        flexDirection:'row',
        backgroundColor: '#bfe9ff',
        alignItems: 'center',
        justifyContent: 'center',
        width: 250,
        height: 50,
        marginBottom: 30,
        borderRadius: 5,  
    },

    image: {
      width: 180,
      height: 180,
      justifyItems: 'center',
      alignItems: 'center',
      resizeMode: 'contain',
      marginTop: 170,
      borderRadius: 100,
    },

    text: {
        fontSize: 30,
        textAlign: 'center',
        color: 'white'
    },
    textinput: {
      marginTop: 20,
      height: 40,
      borderColor: "gray",
      borderBottomWidth: 1,
      marginBottom: 10,
    }
  }

const Container = styled.View`
    flex : 1;
    justify-content : center;
    align-items : center;
    background-color : ${({ theme }) => theme.background};
    padding : 20px;
`;


const Login = ({navigation}) => {
    const [ID, setID] = useState('')
    const [password, setPassword] = useState('')

    const goResgister = () => {
        navigation.navigate(RegisterPage)
    }

    return (
        <KeyboardAwareScrollView 
            contentContainerStyle = {{flex : 1}}
            extraScrollHeight = {20}
        >
        <TouchableWithoutFeedback>
        <Container>
            <View style={{flex : 1.5}}>
                <Image style={styles.image} source={require('../images/login_logo.png')} />
            </View>
            <View style={{flex : 1.2}}>
                <TextInput style={styles.textinput}
                    placeholder="ID"
                    onChangeText={text => setID(text)} value={ID}
                />
                <TextInput style={styles.textinput}
                    placeholder="PASSWORD"
                    onChangeText={text => setPassword(text)} value={password}
                />
                <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate(kakaoLogin)}>
                    <Text style={{color: '#3C1E1E', fontWeight: 'bold'}}>로그인</Text>
                </TouchableOpacity>

                <View style={{flex: 0.75}}>
                    <View style={styles.btnArea}>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={{color: 'gray'}}>사랑해가 처음이라면? <Text style={{textDecorationLine: 'underline'}} onPress={goResgister}>회원가입</Text>이 필요해요!</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Container>
        </TouchableWithoutFeedback>
        </KeyboardAwareScrollView>
    );
};

export default Login