import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/Colors';
import Typography from './Typography';
import BoxShadow from './BoxShadow';
import { useState } from 'react';


export default function CustomButton({
  title,
  style,
  onPress, 
  colors = [Colors.primary[0], Colors.primary[1]],
  disabled = false, 
}) {

  const [isPressed, setIsPressed] = useState(false)

  const handlePress = disabled ? () => {} : onPress;

  return (
    <BoxShadow 
      cmRadius={10}
      cmWidth={"100%"}
      cmStyle={ isPressed && styles.pressButton}
      cmElevation={2}
    >
        <Pressable
          style={[styles.button, style]}
          onPressIn={() => setIsPressed(true)}
          onPressOut={() => setIsPressed(false)}
          onPress={handlePress} 
          disabled={disabled} 
        >
          <LinearGradient
            colors={colors}
            style={{width: "100%", alignItems: 'center', padding: 10,  borderRadius: 10}}
          >

            <Typography
              style={{
                color: disabled ? Colors.textDisabled : Colors.text,
                textAlign: 'center',
              }}
              type={"h2"}
            >
              {title}
            </Typography>

          </LinearGradient>
        </Pressable>
      
    </BoxShadow>
  );
}


const styles = StyleSheet.create({
  button: {
    width: '100%',
  },
  pressButton: {
    opacity: 0.6
  }
});