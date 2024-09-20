import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { auth } from '../firebase';

export default function HomeScreen({ navigation }) {
  const handleLogout = () => {
    auth.signOut();
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Xin chào, {auth.currentUser?.email}</Text>
      <Button title="Đăng xuất" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  welcome: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 40,
  },
});
