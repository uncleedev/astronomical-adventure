import { Pressable, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Typography from './Typography';
import { Colors } from '../constants/Colors';
import BoxShadow from './BoxShadow';

export default function IconButton({ title, icon, onPress, disabled, mystyle }) {
  return (
    <BoxShadow>
      <Pressable 
        onPress={disabled ? null : onPress} 
        disabled={disabled} 
        style={[styles.button, mystyle]}
      >
        <TouchableOpacity>
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
        </TouchableOpacity>
      </Pressable>
    </BoxShadow>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    padding: 10, 
    alignItems: 'center', 
    borderRadius: 10,
    backgroundColor: Colors.background,
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