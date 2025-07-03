import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {useLocalSearchParams} from "expo-router";

const Details = () => {
    const {id} = useLocalSearchParams();
  return (
    <View>
      <Text>Movie Details: {id}</Text>
    </View>
  );
};

export default Details;
const styles = StyleSheet.create({});