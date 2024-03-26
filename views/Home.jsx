import { View, Text, SafeAreaView } from "react-native"
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";

const Home = ()=>{
    const insets = useSafeAreaInsets();
    return(
        <SafeAreaProvider style={{padding: insets.top}}>
            <SafeAreaView>
            <View>
                <Text>Home</Text>
            </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
};
export default Home;