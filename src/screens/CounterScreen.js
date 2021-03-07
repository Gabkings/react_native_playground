import React , { useReducer} from 'react';

import {View, Text, StyleSheet, Button} from 'react-native'


let CHANGE_INC = 1

const reducer = (state, action) => {

    state = {...state, count: state.count + action.change}

    return state
    
}

const CounterScreen = (props) => {
    const [state, dispatch] = useReducer(reducer, {count : 0})
    const {count} = state
    return (
        <View>
            <Button
            title="Increase" onPress={() => dispatch({change: CHANGE_INC})
                }/>
            <Button
            title="Decrease"  onPress={() => dispatch({ change: -CHANGE_INC}) }/>

            <Text>Current count - {count}</Text>
            
        </View>
    );
}

const styles = StyleSheet.create({

});

export default CounterScreen;