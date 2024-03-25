import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { ImageBackground, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import InputField from '../components/reusableComponents/InputField';
import inputField from '../styles/inputField';
import { COLORS } from '../assets/themes/themes';
import login from '../styles/login';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [buttonClick, setButtonClick] = useState(false);
    const [error, setError] = useState(null);
    const [inputError, setInputError] = useState('');

const navigation = useNavigation(); 

 const navigateToPage = (pageName) => {
    navigation.navigate(pageName);
 }

    const HandleSubmit = async () => {
        
        setButtonClick(true);

        let signupData = {
            email,
            password,
        };
        if(
            email !== "" &&
            password !== ""
        ){
            setInputError("")
            navigateToPage('Home')
        }
        
        setInputError('Email and Password required');

    }
    return(
        <SafeAreaView>
                    
            <ImageBackground
            source={require('../assets/images/rm251-mind-08-f.jpg')}
            style={{height: '100%', width: '100%'}}
            >
                <View style={login.inputContainer}>
                    <InputField
                        placeholder="Email"
                        keyboardType="email-address"
                        onChangeTex={(text) => setEmail(text)}
                        value={email}
                    />
                   
                    <InputField
                        placeholder="password"
                        keyboardType="name"
                        onChangeTex={(text) => setPassword(text)}
                        secureTextEntry={true}
                        value={password}
                    />
                </View>
                <View>
                    {error && <Text style={{color: COLORS.white}}></Text>}
                    {inputError !== "" && (
                        <Text style={{color: COLORS.darkChocolateBrown}}>{inputError}</Text>
                    )}
                </View>
                <View style={login.buttonContainer}>
                    <TouchableOpacity 
                     style={login.butttonStyle}
                     
                     onPress={(e) =>  HandleSubmit(e)}
                    >
                        <Text style={{color: COLORS.white, fontSize: 25, padding: 10}}>Login</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            
        </SafeAreaView>
    )
}
export default Login;