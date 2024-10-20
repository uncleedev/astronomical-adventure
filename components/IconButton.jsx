import { Pressable, StyleSheet, View, Image } from 'react-native';
import React from 'react';
import Typography from './Typography';
import { Colors } from '../constants/Colors';

export default function IconButton({ title, icon, onPress, disabled, mystyle }) {
  return (
    <Pressable onPress={disabled ? null : onPress} disabled={disabled} style={[styles.button, mystyle]}>
      <View style={styles.content}>
        {icon && <Image source={icon} style={styles.icon} />} 
        <Typography
          style={{
            color: disabled ? Colors.textDisabled : Colors.text,
            textAlign: 'center',
          }}
          type={"h3"}
        >
          {title}
        </Typography>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    padding: 10, 
    alignItems: 'center', 
    shadowColor: "#FFFFFF",
    shadowOpacity: 0.5,
    shadowRadius: 4,
    borderRadius: 10,
    borderColor: Colors.primary[0],
    borderWidth: 1
  },
  content: {
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  icon: {
    width: 24, 
    height: 24, 
    marginRight: 8, 
  },
});