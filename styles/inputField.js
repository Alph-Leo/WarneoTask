import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../assets/themes/themes";

export default StyleSheet.create({
    inputContainer: {
        // marginLeft: 40,
        // marginRight: 20
        // margin: 20
        

    },
    textInput: {
        color: COLORS.white,
        fontSize: 16
    },

    input: {
        marginLeft: 20,
        width: '90%',
        height: 50,
        borderColor: 'rgb(200, 100, 250)',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 12,
        padding: 10,
        fontSize: SIZES.medium,
        marginVertical: 10,
        color: COLORS.white,
        backgroundColor: 'rgb(200, 100, 250)'
        
    },
    buttonContainer: {
        marginTop: 20,
        width:350,
        alignItems: 'center',
    },
    butttonStyle: {
        borderWidth: 1,
        height: 50,
        width: '90%',
        borderRadius: 12,
        borderStyle: 'solid',
        borderColor: 'blue',
        alignItems: 'center',
        backgroundColor: 'blue'
        
    }
});