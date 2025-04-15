import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

import defaultImage from '../assets/Default.png';

const DetailScreen = ({ route }) => {
  const { person } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.borderOuter}>
        <View style={styles.borderMiddle}>
          <View style={styles.borderInner}>
            <Card style={styles.card}>
              <Image
                source={person.image?.url ? { uri: person.image.url } : defaultImage}
                style={styles.image}
              />
              <Card.Content>
                <Title>{person.first_name} {person.last_name}</Title>
                <Paragraph>Födelsedatum: {person.birthday || 'Saknas'}</Paragraph>
                <Paragraph>Adress: {person.address || 'Saknas'}</Paragraph>
                <Paragraph>Kommun: {person.city || 'Saknas'}</Paragraph>
              </Card.Content>
            </Card>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  borderOuter: {
    padding: 4,
    backgroundColor: 'blue',
    borderRadius: 16,
    marginBottom: 10,
  },
  borderMiddle: {
    padding: 2,
    backgroundColor: 'yellow',
    borderRadius: 14,
  },
  borderInner: {
    padding: 2,
    backgroundColor: 'red',
    borderRadius: 12,
  },
  card: {
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 420,
    resizeMode: 'contain',
    marginTop: 20,
  },
});

