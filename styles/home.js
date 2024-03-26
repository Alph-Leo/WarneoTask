import { StyleSheet } from "react-native";
import { COLORS } from "../assets/themes/themes";

export default StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerText: {
        fontSize: 25, 
        fontWeight: 'bold'
    },
    headerButton: {
        backgroundColor: COLORS.white2,
        borderColor: COLORS.gray,
        borderRadius: 10,
        width: 70,
        height: 30
    },
    headerButtonText: {
        padding: 5, 
        marginLeft: 8,
        fontWeight: '500'
    }
})