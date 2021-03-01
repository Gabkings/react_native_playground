import React from 'react';

import {View, Text, Button } from 'react-native'

const ColorCounter = (props) => {
    return (
        <View>
            <Text>{props.title}</Text>
            <Button title={props.moreColor} onPress={() => props.onIncrease()} />
            <Button title={props.lessColor} onPress={()=> props.onDecrease()} />
        </View>
    );
}

export default ColorCounter;