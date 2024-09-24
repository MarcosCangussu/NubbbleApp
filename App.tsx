/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Icon} from './src/assets/icons/Icon';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text preset="headingLarge">App</Text>
          <Icon name="eyeOn" color="error" size={100} />
          <Icon name="arrowLeft" color="carrotSecondary" size={100} />
          <Icon name="chevronRight" color="carrotSecondary" size={100} />


        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}
export default App;
