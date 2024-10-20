import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../constants/Colors';
import Typography from './Typography';

export default function CardPlanet({ srcpath, name, description, onPress }) {
  const [isHovered, setIsHovered] = useState(false);
  const defaultImage = require("../assets/images/icon.png");

  return (
    <TouchableOpacity
      style={[styles.container, isHovered && styles.hoveredContainer]}
      onPress={onPress} 
      onPressIn={() => setIsHovered(true)}
      onPressOut={() => setIsHovered(false)}
    >

      <Image
        style={{
          height: 100,
          width: 100,
          borderRadius: 50,
        }}
        source={srcpath ? srcpath : defaultImage}
      />

      <View style={{ width: "100%", gap: 8 }}>
        <Typography type={"h3"}>{name ? name : "Planet"}</Typography>
        <Typography type={"h4"}>{description ? description : "Some Details"}</Typography>
      </View>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: 'center',
    padding: 12,
    height: 196,
    width: 164,
    backgroundColor: Colors.background,
    borderRadius: 10,
    shadowColor: "#FFFFFF",
    shadowOpacity: 0.5,
    shadowRadius: 4,
    gap: 21,
    borderWidth: 0, 
    borderColor: 'transparent',
  },

  hoveredContainer: {
    borderWidth: 2, 
    borderColor: Colors.primary[0]
  },
});