import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const IndexScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/coat_of_arms.png')}
      resizeMode="cover"
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.welcomeText}>
          Välkommen till Parliment Browser för att se nuvarande ålänska lagtingsledarmöter!
        </Text>
        <Button
          title="Fortsätt"
          onPress={() => navigation.navigate('Lista')}
        />
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.8)', 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
});
