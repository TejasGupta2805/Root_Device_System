import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Home',
      headerTitleStyle: styles.headerTitle,
      headerStyle: styles.header,
      headerRight: () => (
        <Ionicons
          name='notifications-outline'
          size={24}
          color='black'
          style={styles.headerRightIcon}
        />
      ),
      headerTintColor: 'white',
      headerLeft: () => (
        <Pressable style={styles.backButton} onPress={handleBackPress}>
          <Ionicons name='arrow-back' size={24} color='white' />
        </Pressable>
      ),
    });
  }, []);

  const handleBackPress = () => {
    alert('Back arrow is pressed !');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Home Page</Text>
      <Pressable
        style={styles.button}
        onPress={() => alert('Logout button is pressed !')}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 80,
    margin: 10,
    padding: 10,
    borderWidth: 3,
    borderColor: '#FFC72C',
    borderRadius: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginVertical: 120,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15,
  },
  button: {
    width: 300,
    height: 70,
    backgroundColor: 'red',
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 14,
    borderRadius: 10,
    marginTop: 100,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 19,
    fontWeight: '700',
    color: 'white',
  },
  header: {
    backgroundColor: '#003580',
    height: 140,
    borderBottomColor: 'transparent',
    shadowColor: 'transparent',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  headerRightIcon: {
    marginRight: 12,
    color: 'white',
  },
  backButton: {
    marginLeft: 8,
    marginRight: 22,
  },
});

export default Home;
