import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function SocialPost() {
  return (
    <View style={styles.postContainer}>
      <Text style={styles.userName}>Leonardo Barbosa</Text>
      <Image
        source={{ uri: 'https://media-gru1-2.cdn.whatsapp.net/v/t61.24694-24/435517219_1162061221820608_8329125104651948486_n.jpg?stp=dst-jpg_tt6&ccb=11-4&oh=01_Q5AaIELIEmPxhg7iVDumKW-QTNk90bSCqohYzMDkDeskDoNy&oe=67561F7C&_nc_sid=5e03e0&_nc_cat=106' }}
        style={styles.postImage}
      />
      <Text style={styles.postDescription}>
        Rede Social de Leonardo de Vasconcelos Barbosa
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: '#9999',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    margin: 20,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  postDescription: {
    fontSize: 16,
    color: '#000',
    textAlign: 'justify',
  },
});
