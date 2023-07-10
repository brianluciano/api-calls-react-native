import { View, Text } from 'react-native'
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import LoginForm from '../components/Auth/LoginForm';
import UserData from '../components/Auth/UserData';

const UserAccount = () => {
  const navigation = useNavigation();
  const auth = null;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View>
      { auth ? <UserData /> : <LoginForm />}
    </View>
  );
};

export default UserAccount ;