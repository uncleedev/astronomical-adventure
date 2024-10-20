import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../constants/Colors';
import Typography from './Typography';

export default function CardParticipant({ avatar, lastname, role, description }) {
  const [isHovered, setIsHovered] = useState(false);
  const defaultImage = require("../assets/images/icon.png");

  return (
    <TouchableOpacity
      style={[styles.container, isHovered && styles.hoveredContainer]}
      onPressIn={() => setIsHovered(true)}
      onPressOut={() => setIsHovered(false)}
    >
      <View style={styles.avatarContainer}>
        <Image
          source={avatar ? avatar : defaultImage}
          style={styles.avatar}
        />
      </View>

      <View style={styles.infoContainer}>
        <Typography type={"h4"} myStyle={styles.name}>{lastname}</Typography>
        <Typography type={"h3"} color={Colors.accent[0]} myStyle={styles.role}>{role}</Typography>
        <Typography type={"p"} myStyle={styles.description}>{description}</Typography>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: 'center',
    padding: 16,
    height: "auto",
    width: "100%",
    backgroundColor: Colors.background,
    borderRadius: 20,
    shadowColor: "#FFFFFF",
    shadowOpacity: 0.5,
    shadowRadius: 4,
    justifyContent: "space-between",
    borderColor: Colors.primary[0],
    borderWidth: 1
  },

  hoveredContainer: {
    borderWidth: 2,
    borderColor: Colors.primary[0],
  },

  avatarContainer: {
    marginRight: 16,
  },

  avatar: {
    height: 60,
    width: 60,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: Colors.background,
  },

  infoContainer: {
    flex: 1,
  },

  name: {
    textTransform: "uppercase",
    marginBottom: 8,
  },

  role: {
    textTransform: "uppercase",
    marginBottom: 8,
  },

  description: {
    width: 190,
  },
});