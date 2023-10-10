import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Card = (props: any) => {
  const [cardText, setCardText] = useState({
    title: 'Initial Title',
    description: 'Initial Description',
    time: '20:21:18',
  });

  // useEffect(() => {
  //   console.log('--inside interval' + new Date());
  //   const intervalId = setInterval(() => {
  //     const newText = {
  //       title: 'New Title ' + generateRandomText(),
  //       description: 'New Description ' + generateRandomText(),
  //       time: '20:21:18 ' + generateRandomText(),
  //     };
  //     setCardText(newText);
  //   }, 1000);

  //   // Clear the interval when the component unmounts (memory leak)
  //   return () => clearInterval(intervalId);
  // }, [cardText.description, cardText.time, cardText.title]);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{cardText.title}</Text>
        <Text style={styles.description}>{cardText.description}</Text>
        <Text style={styles.time}>Time: {cardText.time}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#b6f978',
    padding: 20,
    width: 300,
    height: 150,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  time: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Card;

// function getFormattedTime() {
//   const currentTime = new Date();
//   const hours = currentTime.getHours().toString().padStart(2, '0');
//   const minutes = currentTime.getMinutes().toString().padStart(2, '0');
//   const seconds = currentTime.getSeconds().toString().padStart(2, '0');
//   return `${hours}:${minutes}:${seconds}`;
// }

function generateRandomText() {
  return Math.random().toString(36).substring(7);
}
