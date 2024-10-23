import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../constants/Colors';
import Typography from './Typography';
import BoxShadow from './BoxShadow';
import ImageAnimation from './ImageAnimation';

export default function CardPlanet({ srcpath, name, description, onPress }) {
  const [isHovered, setIsHovered] = useState(false);
  const defaultImage = require("../assets/images/icon.png");

  return (
    <TouchableOpacity
      style={[isHovered && styles.hoveredContainer]}
      onPress={onPress}
      onPressIn={() => setIsHovered(true)}
      onPressOut={() => setIsHovered(false)}
    >
      <BoxShadow  cmElevation={isHovered ? 0 : 2}>
        <View 
          style={styles.container

          }
        >
          <Image
            style={styles.image}
            source={srcpath ? srcpath : defaultImage}
          />


          <View style={styles.infoContainer}>
            <Typography type={"h3"} myStyle={styles.name}>{name ? name : "Planet"}</Typography>
            <Typography type={"h4"} myStyle={styles.description}>{description ? description : "Some Details"}</Typography>
          </View>
        </View>
  
      </BoxShadow>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: 'center',
    height: 196,
    width: "100%",
    backgroundColor: Colors.background,
    borderRadius: 10,
    padding: 16,
    gap: 16,
    borderColor: Colors.primary[0],
    borderWidth: 1
  },

  hoveredContainer: {
    borderWidth: 2,
    borderColor: Colors.primary[0],
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderColor: Colors.background,
  },

  infoContainer: {
    width: "100%",
    gap: 8
  },
});