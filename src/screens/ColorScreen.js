import React, {useState} from 'react';

import {View,Button, FlatList} from 'react-native'

const ColorScreen = (props) => {

    const [colors, setColors] = useState([])

    return (
        <View>
            <Button title="Add Color" onPress={() => {
                setColors([...colors, randomColors()])
            }} />
            
            <FlatList 
                keyExtractor={(newItem) => newItem}
                data={colors}
                renderItem={({item}) => {
                    return <View style={{height: 100, width: 100, backgroundColor: item}}></View>
                }}
            />
        </View>
    );
}

const randomColors = () =>{
    let red = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)

    return `rgb(${red}, ${blue}, ${green})`
}

export default ColorScreen;