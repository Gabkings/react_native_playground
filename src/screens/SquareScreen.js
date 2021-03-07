import React, {useReducer} from 'react';

import {View, Button} from 'react-native'
import ColorCounter from '../components/ColorCounter';

let COLOR_INCREMENT = 10

const reducer = (state, action) =>{
    switch(action.colorToChange){
        case 'red':
            return state.red + action.amount > 255 || state.red + action.amount <0 ? state : {...state, red: state.red + action.amount}
        case 'green':
            return state.green + action.amount > 255 || state.green + action.amount <0 ? state :  {...state, green: state.green + action.amount}
        case 'blue':
            return state.blue + action.amount > 255 || state.blue + action.amount <0 ? state :  {...state, blue : state.blue + action.amount}
        default:
            return state

    }
}


const SquareScreen = (props) => {

    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0})
    const {red,green, blue} = state

    return ( 
        <View>
            <ColorCounter 
                onIncrease={()=> dispatch({colorToChange: 'red', amount: COLOR_INCREMENT})} 
                onDecrease={()=> dispatch({colorToChange: 'red', amount: -1*COLOR_INCREMENT})} 
                title="Red" moreColor="More Red" 
                lessColor="Less Read" />
            <ColorCounter 
            onIncrease={()=> dispatch({colorToChange: 'green', amount: COLOR_INCREMENT})} 
            onDecrease={()=> dispatch({colorToChange: 'green', amount: -1*COLOR_INCREMENT})} 
            title="Green" 
            moreColor="More Green" 
            lessColor="Less Green" />
            <ColorCounter 
                onIncrease={()=> dispatch({colorToChange: 'blue', amount: COLOR_INCREMENT})} 
                onDecrease={()=> dispatch({colorToChange: 'blue', amount: -1*COLOR_INCREMENT})} 
                title="Blue" 
                moreColor="More Blue" 
                lessColor="Less Blue"/>

                <View style={{width: 200, height: 200, backgroundColor: `rgb(${red},${green},${blue})`}}></View>
        </View>
    );
}

export default SquareScreen;