import { SafeAreaView, Text } from 'react-native'
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const Favorite = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView>
      <Text>Lista de Favoritos</Text>
    </SafeAreaView>
  );
};

export default Favorite ;