
import React from 'react';
import {
  Text,
  View,
  Button,
  ScrollView
} from 'react-native';
import TodoScreen from './src/Screen/TodoScreen';

const App = () => {
  return (
    <ScrollView>
      <View>
        <TodoScreen/>
      
      </View>
    </ScrollView>
  )
}

export default App;
