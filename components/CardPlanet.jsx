import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../constants/Colors';
import Typography from './Typography';
import BoxShadow from './BoxShadow';

export default function CardPlanet({ srcpath, name, description, onPress }) {
  const [isHovered, setIsHovered] = useState(false);
  const defaultImage = require("../assets/images/icon.png");

  return (
    <BoxShadow customRadius={2}>
      <TouchableOpacity
        style={[styles.container, isHovered && styles.hoveredContainer]}
        onPress={onPress}
        onPressIn={() => setIsHovered(true)}
        onPressOut={() => setIsHovered(false)}
      >
  
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={srcpath ? srcpath : defaultImage}
          />
        </View>

        <View style={styles.infoContainer}>
          <Typography type={"h3"} myStyle={styles.name}>{name ? name : "Planet"}</Typography>
          <Typography type={"h4"} myStyle={styles.description}>{description ? description : "Some Details"}</Typography>
        </View>
      </TouchableOpacity>
    </BoxShadow>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: 'center',
    padding: 12,
    height: 196,
    width: "100%",
    marginLeft: 1,
  },

  hoveredContainer: {
    borderWidth: 2,
    borderColor: Colors.primary[0],
  },

  imageContainer: {
    marginBottom: 16,
  },

  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderColor: Colors.background,
  },

  infoContainer: {
    width: "100%",
  },

  name: {
    marginBottom: 8,
  },
});