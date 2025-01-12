/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Keyboard,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

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
  return (
    // <View style={{backgroundColor, flex: 1}}>{children}</View>;

    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{backgroundColor, flex: 1}}>{children}</View>
    </TouchableWithoutFeedback>
  );
}
