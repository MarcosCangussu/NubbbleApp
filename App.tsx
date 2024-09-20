import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Text italic preset="headingLarge">
        CoffeStack
      </Text>
      <Text preset="headingSmall">
        CoffeStack
      </Text>
    </SafeAreaView>
  );
}
export default App;
