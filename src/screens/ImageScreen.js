import React from 'react';

import {Text , View ,StyleSheet} from 'react-native'
import ImageDetails from './components/ImageDetails';



const ImageScreen = (props)  => {
    const newLocal = '../../../assets/forest.jpg';
    return (
        <View>
            <ImageDetails src={newLocal} title="Forest" />
            <ImageDetails title="Beach" />
            <ImageDetails title="Mountain" />
        </View>
    );
}

export default ImageScreen;