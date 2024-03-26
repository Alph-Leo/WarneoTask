import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Home from "../views/Home";
import { COLORS, SIZES } from "../assets/themes/themes";
import Profile from "../views/Profile";
import Settings from "../views/Settings";
import Chat from "../views/Chat";
import Search from "../views/Search";


const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
    <TouchableOpacity
        style={{
            top: -30,
            justifyContent: 'center',
            alignItems: 'center',   
        }}
        onPress={onPress}
    >
        <View
            style={{
                width: 70,
                height: 70,
                borderRadius: 35,
                backgroundColor: 'blue'
            }}
        >
            {children}
        </View>
    </TouchableOpacity>
)

const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarHideOnKeyBoard: true,
    tabBarStyle: {
      outerWidth: SIZES.width,
      innerWidth: SIZES.width,
      backgroundColor: 'rgb(00, 00, 100)',
      borderTopRightRadius: 18,
      borderTopLeftRadius: 18,
      borderRadius: 18,
      top: 0,
      height: (18 / 100) * SIZES.width,
    },
  };

  const BottomTabNav = () => {
    return(
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => {
                        return(
                            <View style={{
                                // flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                // backgroundColor: focused ? 'red' : 'yellow',
                                // elevation: focused ? 5 : 0,
                                // width: focused ? 60 : 70,
                                // top: 10
                            }}>
                                <Image 
                                    source={require('../assets/icons/icons8-home-50.png')}
                                    resizeMode="contain"
                                    style={{
                                        height: 25,
                                        width: 25,
                                        tintColor: focused ? 'yellow' : 'white'
                                    }}
                                />
                                <View>
                                    <Text style={{
                                        color: focused ? 'yellow' : 'white',
                                        fontSize: 12
                                    }}>Home</Text>
                                </View>

                            </View>
                        )
                    }
                }}
            />

            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({focused}) => {
                        return(
                            <View style={{
                                // flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                // backgroundColor: focused ? 'red' : 'yellow',
                                // elevation: focused ? 5 : 0,
                                // width: focused ? 60 : 70,
                                // top: 10
                            }}>
                                <Image 
                                    source={require('../assets/icons/icons8-male-user-50.png')}
                                    resizeMode="contain"
                                    style={{
                                        height: 25,
                                        width: 25,
                                        tintColor: focused ? 'yellow' : 'white'
                                    }}
                                />
                                <View>
                                    <Text style={{
                                        color: focused ? 'yellow' : 'white',
                                        fontSize: 12
                                    }}>Profile</Text>
                                </View>

                            </View>
                        )
                    }
                }}
            />

            <Tab.Screen
                name="Post"
                component={Search}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image
                            source={require('../assets/icons/icons8-plus-64.png')}
                            resizeMode="contain"
                            style={{
                                width: 60,
                                height: 60,
                                tintColor: 'yellow'
                            }}
                        />

                    ),
                    tabBarButton: (props) => (
                        <CustomTabBarButton {...props}/>
                    )
                }}
            />

            <Tab.Screen
                name="Chat"
                component={Chat}
                options={{
                    tabBarIcon: ({focused}) => {
                        return(
                            <View style={{
                                // flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                // backgroundColor: focused ? 'red' : 'yellow',
                                // elevation: focused ? 5 : 0,
                                // width: focused ? 60 : 70,
                                // top: 10
                            }}>
                                <Image 
                                    source={require('../assets/icons/icons8-chat-48.png')}
                                    resizeMode="contain"
                                    style={{
                                        height: 25,
                                        width: 25,
                                        tintColor: focused ? 'yellow' : 'white'
                                    }}
                                />
                                <View>
                                    <Text style={{
                                        color: focused ? 'yellow' : 'white',
                                        fontSize: 12
                                    }}>Chat</Text>
                                </View>

                            </View>
                        )
                    }
                }}
            />

            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarIcon: ({focused}) => {
                        return(
                            <View style={{
                                // flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                // backgroundColor: focused ? 'red' : 'yellow',
                                // elevation: focused ? 5 : 0,
                                // width: focused ? 60 : 70,
                                // top: 10
                            }}>
                                <Image 
                                    source={require('../assets/icons/icons8-settings-50.png')}
                                    resizeMode="contain"
                                    style={{
                                        height: 25,
                                        width: 25,
                                        tintColor: focused ? 'yellow' : 'white'
                                    }}
                                />
                                <View>
                                    <Text style={{
                                        color: focused ? 'yellow' : 'white',
                                        fontSize: 12
                                    }}>Settings</Text>
                                </View>

                            </View>
                        )
                    }
                }}
            />
        </Tab.Navigator>
    )
  }

  export default BottomTabNav;