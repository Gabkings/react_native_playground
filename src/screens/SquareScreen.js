import React, {useState} from 'react';

import {View, Button} from 'react-native'
import ColorCounter from '../components/ColorCounter';

let COLOR_INCREMENT = 12




const SquareScreen = (props) => {
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)


    const setColor = (color, change) => {
        switch(color){
            case 'red':
                red + change > 255 || red + change < 0 ? null : setRed(red + change)
                return
            case 'green':
                green + change > 255 || green + change < 0 ? null : setGreen(green + change)
                return
    
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change)
                return
        }
    }

    console.log(red)
    return ( 
        <View>
            <ColorCounter 
                onIncrease={()=> {setColor('red',  COLOR_INCREMENT)}} 
                onDecrease={()=> {setColor('red', -1 * COLOR_INCREMENT)}} 
                title="Red" moreColor="More Red" 
                lessColor="Less Read" />
            <ColorCounter 
            onIncrease={()=> {setColor('green' , COLOR_INCREMENT)}} 
            onDecrease={()=> {setColor('green', -1 * COLOR_INCREMENT)}} 
            title="Green" 
            moreColor="More Green" 
            lessColor="Less Green" />
            <ColorCounter 
                onIncrease={()=> {setColor('blue', COLOR_INCREMENT)}} 
                onDecrease={()=> {setColor('blue',-1 * COLOR_INCREMENT)}} 
                title="Blue" 
                moreColor="More Blue" 
                lessColor="Less Blue"/>

                <View style={{width: 100, height: 100, backgroundColor: `rgb(${red},${green},${blue})`}}></View>
        </View>
    );
}

export default SquareScreen;