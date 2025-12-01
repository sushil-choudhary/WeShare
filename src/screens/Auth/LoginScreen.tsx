/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch } from '../../redux/hooks';
import { login } from '../../redux/slices/authSlice';

type LoginForm = {
  email: string;
  password: string;
};

const schema = yup
  .object({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().min(6, 'Min 6 characters').required('Password is required'),
  })
  .required();

export default function Login({ navigation }: any) {
  const dispatch = useAppDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: LoginForm) => {
    await dispatch(login({ email: data.email, password: data.password }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      {/* Email Field */}
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.inputWrapper}>
            <Text>Email</Text>
            <TextInput
              style={styles.input}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder="Enter your email"
            />
            {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}
          </View>
        )}
      />

      {/* Password Field */}
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.inputWrapper}>
            <Text>Password</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder="Enter your password"
            />
            {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}
          </View>
        )}
      />

      <View style={styles.buttonGroup}>
        <Button title="Login" onPress={handleSubmit(onSubmit)} />
      </View>

      <View style={{ marginTop: 20 }}>
        <Button title="Go to Register" onPress={() => navigation.navigate('Register')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 26,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  inputWrapper: {
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    padding: 10,
    marginTop: 5,
  },
  error: {
    color: 'red',
    marginTop: 4,
  },
  buttonGroup: {
    marginTop: 10,
  },
});
