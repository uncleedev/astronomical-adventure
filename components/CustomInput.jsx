import { StyleSheet, TextInput, View, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../constants/Colors';
import BoxShadow from './BoxShadow';

export default function CustomInput({ 
  placeholder, 
  type = 'text', 
  rightIcon = false,
  leftIcon 
}) {

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <BoxShadow
      customRadius={2}
    >
      <View style={styles.container}>
        {leftIcon && (
          <Image source={leftIcon} style={[styles.icon, styles.rightIcon]} />
        )}
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          secureTextEntry={type === 'password' && !isPasswordVisible}
          keyboardType={type === 'number' ? 'numeric' : 'default'}
          placeholderTextColor={'#9B9DA2'}
        />
        {rightIcon && (
          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.leftIcon}>
          <Image 
            source={isPasswordVisible ? require("../assets/icons/show.png") : require("../assets/icons/hide.png")} 
            style={styles.icon} 
          />
        </TouchableOpacity>
      )}
      </View>
    </BoxShadow>
  );
}

const styles = StyleSheet.create({
  container: {
    shadowColor: "#FFFFFF",
    shadowOpacity: 0.5,
    shadowRadius: 4,  
  },
  input: {
    paddingVertical: 12,
    paddingHorizontal: 48,
    fontSize: 16,
    color: Colors.text,
  },
  rightIcon: {
    position: 'absolute',
    left: 16,
    top: 16,
  },
  leftIcon: {
    position: 'absolute',
    right: 16,
    top: 16,
  },
  icon: {
    width: 24,
    height: 24,
  },
});