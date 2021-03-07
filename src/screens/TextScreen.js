import React,{useState} from 'react';

import {Text, View, StyleSheet, TextInput} from 'react-native'

const TextScreen = (props) => {


    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    return (
        <View>
            <Text>Enter Your Name</Text>
            <TextInput  style={styles.input} autoCapitalize="none" autoComplete={false} value={name} onChangeText={(newValue) => setName(newValue)} />
            <TextInput  style={styles.input} textContentType="password" autoCapitalize="none" autoComplete={false} value={password} onChangeText={(newValue) => setPassword(newValue)} />
            <Text>My name is : {name} </Text>

            {password.length < 5 ?
                <Text>Password must be more than 5 characters</Text>:
                <Text>Good to Go</Text>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1,
        padding: 10

    }
})

export default TextScreen;