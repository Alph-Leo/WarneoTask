import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Image } from "react-native"
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import home from "../styles/home";
import { useNavigation } from "@react-navigation/native";


const Home = ()=>{

    const navigation = useNavigation();

    const navigateToPage = (pageName) => {
        navigation.navigate(pageName);
        
    }
    const insets = useSafeAreaInsets();

    return(
        <SafeAreaProvider style={{padding: insets.top}}>
                <View style={home.headerContainer}>
                    <Text style={home.headerText}>Settings</Text>
                    
                </View>
                <ScrollView>
                    <View style={{justifyContent: 'center', alignItems: 'center', }}>
                        
                        <View style={{
                            width: 200,
                            height: 200,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 10
                            
                        }}>
                            <TouchableOpacity >
                                
                                <Image
                                    style={{height: 200, width: 150, marginRight: 3}}
                                    source={require('../assets/images/jpg/pexels-pixabay-326212.jpg')}
                                />
                            </TouchableOpacity>
                            <Image
                                style={{height: 200, width: 150, marginLeft: 3}}
                                source={require('../assets/images/jpg/pexels-pixabay-462162.jpg')}
                            />
                            
                        </View>
                    </View>
                </ScrollView>
                
        </SafeAreaProvider>
    )
};
export default Home;