import { TextInput, View } from "react-native"
import inputField from "../../styles/inputField"
import React from "react"

const InputField = ({placeholder, value, onChangeTex, secureTextEntry}) => {
    return(
        <View>
            <TextInput
                style={inputField.input}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeTex}
                secureTextEntry={secureTextEntry}
            />
        </View>
    );
}
export default InputField;