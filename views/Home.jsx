import { View, Text, SafeAreaView, TouchableOpacity } from "react-native"
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
            <SafeAreaView>
                <View style={home.headerContainer}>
                    <Text style={home.headerText}>Home</Text>
                    <TouchableOpacity style={home.headerButton} onPress={() => navigateToPage('Login')}>
                        <Text style={home.headerButtonText}>Logout</Text>
                    </TouchableOpacity>
                </View>
                <View style={{borderColor: 'blue', borderWidth: 1}}>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
};
export default Home;