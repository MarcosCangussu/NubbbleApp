import React from 'react';
import {ScrollView, View} from 'react-native';
import {UseAppTheme} from '../../../hooks/useAppTheme';

interface Props {
  children: React.ReactNode;
  backgroundColor: string;
}

export function ScrollViewContainer({children, backgroundColor}: Props) {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      style={{backgroundColor, flex: 1}}>
      {children}
    </ScrollView>
  );
}

export function ViewContainer({children, backgroundColor}: Props) {
  return <View style={{backgroundColor, flex: 1}}>{children}</View>;

  // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
  //     <View>{children}</View>
  // </TouchableWithoutFeedback>
}
