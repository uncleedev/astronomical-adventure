import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import Typography from './Typography';
import { Colors } from '../constants/Colors';
import { router } from 'expo-router';

export default function MenuModal({ setOpenModal, onCloseModal }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onCloseModal} style={styles.closeButton}>
        <Image 
          source={require("../assets/icons/close.png")} 
          style={styles.closeIcon}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("home")} style={styles.itemContainer}>
        <Typography type="h3" myStyle={styles.itemText}>Home</Typography>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("about")} style={styles.itemContainer}>
        <Typography type="h3" myStyle={styles.itemText}>About</Typography>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("login")} style={styles.itemContainer}>
        <Typography type="h3" myStyle={styles.itemText}>Logout</Typography>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: Colors.background,
    alignItems: "center",
    paddingTop: 32,
    paddingHorizontal: 16,
    paddingBottom: 16,
    borderRadius: 10,
    gap: 12,
    zIndex: 1000,
    elevation: 5, // android
    // ios
    shadowColor: '#ffffff', 
    shadowOffset: {
      width: 0,
      height: 2, 
    },
    shadowOpacity: 0.3, 
    shadowRadius: 4, 
  },
  closeButton: {
    position: "absolute",
    top: 0, 
    right: 16,
  },
  closeIcon: {
    height: 24,
    width: 24,
  },
  itemContainer: {
    width: "100%",
  },
  itemText: {
    width: "100%",
    padding: 10,
    borderColor: Colors.accent[0],
    borderWidth: 1,
    textAlign: 'center',
    borderRadius: 10,
  },
});