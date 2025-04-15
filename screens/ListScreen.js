import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet, Image } from 'react-native';
import { Card, Title } from 'react-native-paper';

import defaultImage from '../assets/Default.png';

const ListScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.lagtinget.ax/api/persons.json')
      .then((response) => response.json())
      .then((json) => {
          const activeMembers = json
              .filter(person => person.state === "1")
              .sort((a, b) => a.first_name.localeCompare(b.first_name));
        setData(activeMembers);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const renderItem = ({ item }) => {
    const imageUrl = item.image?.url;
    const hasImage = imageUrl && imageUrl.length > 0;
  
    return (
      <View style={styles.borderOuter}>
        <View style={styles.borderMiddle}>
          <View style={styles.borderInner}>
            <Card
              style={styles.card}
              onPress={() => navigation.navigate('Detaljer', { person: item })}
            >
              <View style={styles.row}>
                <Image
                  source={hasImage ? { uri: imageUrl } : defaultImage}
                  style={styles.thumbnail}
                />
                <View style={styles.textContainer}>
                  <Title>{item.first_name} {item.last_name}</Title>
                </View>
              </View>
            </Card>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
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
    marginBottom: 1,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 3,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  
  thumbnail: {
    width: 80,
    height: 90,
    borderRadius: 5,
    marginRight: 10,
  },
  
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
