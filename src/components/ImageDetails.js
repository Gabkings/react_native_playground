import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';



function ImageDetails({ imageSource, title, score }) {
    
    return (
        <View>
            <Image source={imageSource} />
            <Text>{title}</Text>
            <Text>Image Score - {score}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20
    }
})

export default ImageDetails;