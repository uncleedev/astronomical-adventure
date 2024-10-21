import { router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import MenuModal from './MenuModal';

export default function Navigation({ isBack = false }) {
  const [openModal, setOpenModal] = useState(false); 

  const handleBackPress = () => {
    router.push("home");
  };

  const handleMenuPress = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <View style={[styles.container, isBack ? styles.backContainer : styles.defaultContainer]}>
        
      {!openModal && (
        <>
          {isBack && (
            <TouchableOpacity onPress={handleBackPress}>
              <Image
                source={require("../assets/icons/back.png")}
                style={styles.iconSmall}
              />
            </TouchableOpacity>
          )}
          
          <TouchableOpacity onPress={handleMenuPress}>
            <Image
              source={require("../assets/icons/menu.png")}
              style={styles.iconLarge}
            />
          </TouchableOpacity>
        </>
      )}

      {openModal && (
        <MenuModal
          setOpenModal={setOpenModal}
          onCloseModal={handleCloseModal}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  backContainer: {
    justifyContent: "space-between",
  },
  defaultContainer: {
    justifyContent: "flex-end",
  },
  iconSmall: {
    height: 16,
    width: 16,
  },
  iconLarge: {
    height: 24,
    width: 24,
  },
});