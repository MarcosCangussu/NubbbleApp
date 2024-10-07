import React from 'react';
import {Controller, FieldValues, UseControllerProps} from 'react-hook-form';
// import {TextInput, TextInputProps} from '../TextInput/TextInput';
import { PasswordInput, PasswordInputProps } from '../PasswordInput/PasswordInput';

export function FormPasswordInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  ...passwordInput
}: PasswordInputProps & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field, fieldState}) => (
        <PasswordInput
          errorMessage={fieldState.error?.message}
          value={field.value}
          onChangeText={field.onChange}
          {...passwordInput}
        />
      )}
    />
  );
}

{/* <Controller
control={control}
name="password"
rules={{
  required: 'Senha obrigatória',
  minLength: {
    value: 8,
    message: 'A senha deve ter no mínimo 8 caracteres',
  },
}}
render={({field, fieldState}) => (
  <PasswordInput
    errorMessage={fieldState.error?.message}
    value={field.value}
    onChangeText={field.onChange}
    label="Senha"
    placeholder="Digite sua senha"
    boxProps={{mb: 's48'}}
  />
)}
/> */}