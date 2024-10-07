import React from 'react';
import {Alert} from 'react-native';

import {zodResolver} from '@hookform/resolvers/zod';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useForm} from 'react-hook-form';

import {
  Screen,
  Text,
  Button,
  FormTextInput,
  FormPasswordInput,
} from '@components';
// import {Screen} from '../../../components/Screen/Screen';
// import {Text} from '../../../components/Text/Text';
// import {Button} from '../../../components/Button/Button';
import { useResetNavigationSuccess } from '@hooks';
import {RootStackParamList} from '@routes';


import {signUpSchema, SignUpSchema} from './signUpSchema';



type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SignUpScreen({navigation}: ScreenProps) {
  const {reset} = useResetNavigationSuccess();
  const {control, formState, handleSubmit} = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: '',
      fullName: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm({email, password, username, fullName}: SignUpSchema) {
    reset({
      title: 'Sua conta foi criada com sucesso!',
      description: 'Agora é só fazer login na nossa plataforma',
      icon: {
        name: 'checkRound',
        color: 'success',
      },
    });

    Alert.alert(
      `Username: ${username}${'\n'}
      Fullname: ${fullName}${'\n'}
      E-mail: ${email}${'\n'}
      Senha: ${password}`,
    );
  }

  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s32">
        Criar uma conta
      </Text>

      <FormTextInput
        control={control}
        name="username"
        label="Seu username"
        placeholder="@"
        boxProps={{mb: 's20'}}
      />

      <FormTextInput
        control={control}
        name="fullName"
        rules={{
          required: 'Nome obrigatório',
        }}
        label="Seu nome completo"
        placeholder="Digite seu nome completo"
        boxProps={{mb: 's20'}}
      />

      <FormTextInput
        control={control}
        name="email"
        label="Seu nome e-mail"
        placeholder="Digite seu email"
        boxProps={{mb: 's20'}}
      />

      <FormPasswordInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's48'}}
      />

      <Button
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        mt="s48"
        title="Criar uma conta"
      />
    </Screen>
  );
}
