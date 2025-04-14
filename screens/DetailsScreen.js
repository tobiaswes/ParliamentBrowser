import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const DetailScreen = ({ route }) => {
  const { person } = route.params;

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        {person.image && person.image.url ? (
          <Image source={{ uri: person.image.url }} style={styles.image} />
        ) : null}
        <Card.Content>
          <Title>{person.first_name} {person.last_name}</Title>
          <Paragraph>Födelsedatum: {person.birthday || 'Saknas'}</Paragraph>
          <Paragraph>Adress: {person.address}</Paragraph>
          <Paragraph>Kommun: {person.city}</Paragraph>
        </Card.Content>
      </Card>
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
  card: {
    borderRadius: 12,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    borderRadius: 12,
  },
});
