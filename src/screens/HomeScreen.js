import React from 'react';
import { Text, StyleSheet , View, Button} from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title="Go to Components Demo"
      />
      <Button
        onPress={() => navigation.navigate('Counter')}
        title="Go to Counter Demo"
      />
      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate('List')}
      />

      <Button
        title="Go to Colors Demo"
        onPress={() => navigation.navigate('colors')}
      />
      <Button
        title="Go to Square Demo"
        onPress={() => navigation.navigate('square')}
      />

      <Button
        title="Go to Images Demo"
        onPress={() => navigation.navigate('Images')}
      />
    </View>
    )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
