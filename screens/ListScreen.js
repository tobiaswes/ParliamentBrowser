import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ListScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Detta är den andra sidan!</Text>
    </View>
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});