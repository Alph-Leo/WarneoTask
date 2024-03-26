import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { ImageBackground, Pressable, SafeAreaView, Text, ToastAndroid, TouchableOpacity, View } from 'react-native';
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
            ToastAndroid.show('Login Succesfull', ToastAndroid.LONG)
        }
        
        setInputError('Email and Password required');

    }
    return(
        <SafeAreaView>
                    
            <ImageBackground
            source={require('../assets/images/rm251-mind-08-f.jpg')}
            style={{height: '100%', width: '100%'}}
            >
                <View style={{
                    marginLeft: 125, 
                    marginTop: 100,
                    height: 50
                    
                    }}>
                    <Text style={{
                        color: COLORS.white,
                        fontSize: 25,
                        fontWeight: '700'
                    }}>
                            Login</Text>
                </View>
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
                        <Text style={{color: 'red'}}>{inputError}</Text>
                    )}
                </View>
                <View style={login.buttonContainer}>
                    <TouchableOpacity 
                     style={login.butttonStyle}
                     
                     onPress={(e) =>  HandleSubmit(e)}
                    >
                        <Text style={{color: COLORS.white, fontSize: 20, padding: 8}}>Login</Text>
                    </TouchableOpacity>
                    <View style={{marginTop: 30}}>
                        
                        <Pressable onPress={() => navigateToPage('SignUp')}>
                            <Text style={{
                                color: COLORS.white
                            }}>
                                    Forgot Password ?</Text>
                        </Pressable>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        width:300,
                        height: 50,
                        marginTop:50,
                        marginRight: 0
                        }}>
                        <Text style={{
                            color: COLORS.white
                            }}>
                            Don't have an account yet ?
                        </Text>
                        <Pressable onPress={() => navigateToPage('SignUp')}>
                            <Text style={{color: 'blue'}}>Sign Up</Text>
                        </Pressable>
                    </View>
                </View>

            </ImageBackground>
            
        </SafeAreaView>
    )
}
export default Login;