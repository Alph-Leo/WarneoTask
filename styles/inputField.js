import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../assets/themes/themes";

export default StyleSheet.create({
    inputContainer: {
        marginTop: 100,
        padding: 20,

    },
    textInput: {
        color: COLORS.white,
        fontSize: 16
    },

    input: {
        width: '90%',
        height: 50,
        borderColor: COLORS.gray,
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 12,
        padding: 10,
        fontSize: SIZES.medium,
        marginVertical: 10
        
    },
    buttonContainer: {
        marginTop: 100,
        width:350,
        alignItems: 'center',
        borderColor: COLORS.white
    },
    butttonStyle: {
        borderWidth: 1,
        height: 50,
        width: 300,
        borderRadius: 20,
        borderStyle: 'solid',
        borderColor: COLORS.white,
        alignItems: 'center',
        backgroundColor: 'blue'
        
    }
});