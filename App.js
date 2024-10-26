import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { getLatestGames } from '../lib/metacritic';

export default function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        {games.map((game) => (
          <View key={game.slug} style={styles.card}>
            <Image style={styles.image} source={{ uri: game.image }} />
            <Text style={styles.title}>{game.title}</Text>
            <Text style={styles.text}>{game.description}</Text>
            <Text style={styles.score}>Score: {game.score}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: 50,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  text: {
    fontSize: 14,  
    marginTop: 10,
    textAlign: 'center',
    color: '#333', 
    lineHeight: 18, 
    paddingHorizontal: 5,
  },
  score: {
    fontSize: 16,
    color: '#00aaff',
    fontWeight: 'bold',
    marginTop: 5,
    textAlign: 'left',
  },
});
