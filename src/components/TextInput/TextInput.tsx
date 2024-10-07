import React, {useRef} from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
} from 'react-native';

import {UseAppTheme} from '@hooks';

import {Box, BoxProps} from '../Box/Box';
import {$fontFamily, $fontSize, Text} from '../Text/Text';

export interface TextInputProps extends RNTextInputProps {
  label: string;
  errorMessage?: string;
  RightComponent?: React.ReactElement;
  boxProps?: BoxProps;
}

export function TextInput({
  label,
  boxProps,
  errorMessage,
  RightComponent,
  ...rnTextInput
}: TextInputProps) {
  const {colors} = UseAppTheme();
  const inputRef = useRef<RNTextInput>(null);

  const $textInputContainer: BoxProps = {
    flexDirection: 'row',
    padding: 's16',
    borderWidth: errorMessage ? 2 : 1,
    borderColor: errorMessage ? 'error' : 'gray4',
    borderRadius: 's12',
  };

  function focusInput() {
    inputRef.current?.focus();
  }

  return (
    <Box {...boxProps}>
        <Text mb="s4" preset="paragraphMedium">
          {label}
        </Text>
      <Pressable onPress={focusInput}>
        <Box {...$textInputContainer}>
          <RNTextInput
            autoCapitalize="none"
            ref={inputRef}
            placeholderTextColor={colors.gray2}
            style={$textInputStyle}
            {...rnTextInput}
          />
          {RightComponent && <Box ml="s16">{RightComponent}</Box>}
        </Box>
        {errorMessage && (
          <Text preset="paragraphSmall" bold color="error">
            {errorMessage}
          </Text>
        )}
      </Pressable>
    </Box>
  );
}

const $textInputStyle: TextStyle = {
  flexGrow: 1,
  flexShrink: 1,
  padding: 0,
  fontFamily: $fontFamily.regular,
  ...$fontSize.paragraphMedium,
};
