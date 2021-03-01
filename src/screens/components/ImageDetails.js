import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';



function ImageDetails(props) {
    
    return (
        <View>
            <Image source={this.props.src} />
            <Text>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20
    }
})

export default ImageDetails;