import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors'; // Ensure this import is correct if you use Colors

const HorizontalLine = ({ width, color }) => {
  return (
    <View style={[styles.line, { width: width, borderBottomColor: color || "#FFF" }]} />
  );
};

const styles = StyleSheet.create({
  line: {
    borderBottomWidth: 1,
  },
});

export default HorizontalLine;