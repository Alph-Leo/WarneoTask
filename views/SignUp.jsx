import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { ImageBackground, Pressable, SafeAreaView, Text, ToastAndroid, TouchableOpacity, View } from 'react-native';
import InputField from '../components/reusableComponents/InputField';
import inputField from '../styles/inputField';
import { COLORS } from '../assets/themes/themes';

const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
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
            firstName,
            lastName,
            email,
            phoneNumber,
            password,
        };
        if(
            firstName !== "" &&
            lastName !== "" &&
            email !== "" &&
            phoneNumber !== "" &&
            password !== ""
        ){
            setInputError("")
            navigateToPage('Login')
            ToastAndroid.show('Signing you up now', ToastAndroid.SHORT)
        }
        
        setInputError('All fields are required');

    }
    return(
        <SafeAreaView>
                    
            <ImageBackground
            source={require('../assets/images/rm251-mind-15-b.jpg')}
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
                            Sign Up</Text>
                </View>
                <View style={inputField.inputContainer}>
                    <InputField
                        placeholder="FirstName"
                        keyboardType="name"
                        onChangeTex={(text) => setFirstName(text)}
                        value={firstName}
                        
                    />
                    <InputField
                        placeholder="LastName"
                        keyboardType="name"
                        onChangeTex={(text) => setLastName(text)}
                        value={lastName}
                    />
                    <InputField
                        placeholder="Email"
                        keyboardType="email-address"
                        onChangeTex={(text) => setEmail(text)}
                        value={email}
                    />
                    <InputField
                        placeholder="PhoneNumber"
                        keyboardType="numeric"
                        onChangeTex={(text) => setPhoneNumber(text)}
                        value={phoneNumber}
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
                <View style={inputField.buttonContainer}>
                    <TouchableOpacity 
                     style={inputField.butttonStyle}
                     
                     onPress={(e) =>  HandleSubmit(e)}
                    >
                        <Text style={{color: COLORS.white, fontSize: 20, padding: 10}}>Sign Up</Text>
                    </TouchableOpacity>
                    
                </View>
                <View style={{
                    width: 300,
                    height: 50,
                    marginTop: 50,
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginLeft:20
                    
                
                }}>
                    <Text style={{color: COLORS.white}}>Already have an account ?</Text>
                        
                    <Pressable 
                    onPress={() => navigateToPage('Login')}
                                        
                    >
                        <Text style={{color: 'blue'}}>Login</Text>
                    </Pressable>
                </View>
                
            </ImageBackground>
            
        </SafeAreaView>
    )
}
export default SignUp;