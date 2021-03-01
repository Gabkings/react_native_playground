import React from 'react';

import {Text , View ,StyleSheet} from 'react-native'
import ImageDetails from '../components/ImageDetails';



const ImageScreen = (props)  => {
    const newLocal = '../../../assets/forest.jpg';
    return (
        <View>
            <ImageDetails 
             title="Forest"
             imageSource={require('../../assets/forest.jpg')}
             score={9} />
            <ImageDetails 
                 title="Beach"
                 imageSource={require('../../assets/beach.jpg')}
                 score={7}
            />
            <ImageDetails 
                title="Mountain"
                imageSource={require('../../assets/mountain.jpg')}
                score={10}
            />
        </View>
    );
}

export default ImageScreen;