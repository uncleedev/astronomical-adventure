import { StyleSheet, View, TouchableOpacity, Image, Modal } from 'react-native';
import React from 'react';
import Typography from './Typography';
import { Colors } from '../constants/Colors';
import { router } from 'expo-router';
import BoxShadow from './BoxShadow';
import { auth, googleSignIn } from '../configs/firebase';

export default function MenuModal({ setOpenModal, onCloseModal }) {

  

  const handleLogout = async () => {
    try {
      await googleSignIn.revokeAccess();
      await googleSignIn.signOut();
      await auth().signOut();
      router.replace('login');
    } catch (error) {
      console.error('Logout error:', error);
    } 
  };
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={true}
      onRequestClose={onCloseModal} // For Android back button
    >
      <View style={styles.overlay} onTouchEnd={onCloseModal} />

      <View style={styles.container}>
        <TouchableOpacity onPress={onCloseModal} style={styles.closeButton} accessibilityRole="button" accessibilityLabel="Close menu">
          <Image 
            source={require("../assets/icons/close.png")} 
            style={styles.closeIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => router.push("home")} 
          style={styles.itemContainer} 
          accessibilityRole="button" 
          accessibilityLabel="Navigate to Home"
        >
          <BoxShadow cmElevation={2}>
            <View style={{backgroundColor: Colors.background, borderRadius: 10}}>
              <Typography type="h3" myStyle={styles.itemText}>Home</Typography>
            </View>
          </BoxShadow>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => router.push("about")} 
          style={styles.itemContainer} 
          accessibilityRole="button" 
          accessibilityLabel="Navigate to About"
        >
          <BoxShadow cmElevation={2}>
            <View style={{backgroundColor: Colors.background, borderRadius: 10}}>
              <Typography type="h3" myStyle={styles.itemText}>About</Typography>
            </View>
          </BoxShadow>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={handleLogout} 
          style={styles.itemContainer} 
          accessibilityRole="button" 
          accessibilityLabel="Navigate to Login"
        >
          <BoxShadow cmElevation={2}>
            <View style={{backgroundColor: Colors.background, borderRadius: 10}}>
              <Typography type="h3" myStyle={styles.itemText}>Log out</Typography>
            </View>
          </BoxShadow>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    position: 'absolute',
    top: 0,
    left: 16,
    right: 16,
    backgroundColor: Colors.background,
    alignItems: "center",
    paddingTop: 32,
    paddingHorizontal: 16,
    paddingBottom: 16,
    borderRadius: 10,
    gap: 12,
    zIndex: 1000,
    elevation: 5,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.3, 
    shadowRadius: 4, 
  },
  closeButton: {
    position: "absolute",
    top: 5, 
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
    textAlign: 'center',
  },
});