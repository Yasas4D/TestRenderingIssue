import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Card = (props: any) => {
  // console.log('-----------------This is in Card-------------------');

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{props.data.title}</Text>
        <Text style={styles.description}>{props.data.description}</Text>
        <Text style={styles.time}>Time: {props.data.time}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
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
