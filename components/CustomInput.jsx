import { StyleSheet, TextInput, View, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../constants/Colors';

export default function CustomInput({ 
  placeholder, 
  type = 'text', 
  rightIcon,
  leftIcon = false
}) {

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      {rightIcon && (
        <Image source={rightIcon} style={[styles.icon, styles.rightIcon]} />
      )}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={type === 'password' && !isPasswordVisible}
        keyboardType={type === 'number' ? 'numeric' : 'default'}
        placeholderTextColor={'#9B9DA2'}
      />
      {leftIcon && (
        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.leftIcon}>
        <Image 
          source={isPasswordVisible ? require("../assets/icons/show.png") : require("../assets/icons/hide.png")} 
          style={styles.icon} 
        />
      </TouchableOpacity>
    )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
  },
  input: {
    flex: 1,
    fontSize: 16,
    shadowColor: "#FFFFFF",
    shadowOpacity: 0.5,
    shadowRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 48,
    color: Colors.text,
    borderRadius: 10,
  },
  rightIcon: {
    position: 'absolute',
    left: 16,
    top: 10,
  },
  leftIcon: {
    position: 'absolute',
    right: 16,
    top: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
});