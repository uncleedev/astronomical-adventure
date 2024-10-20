import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/Colors';
import Typography from './Typography';

export default function CustomButton({
  title,
  style,
  onPress, 
  colors = [Colors.primary[0], Colors.primary[1]],
  disabled = false, 
}) {
  return (
    <LinearGradient
      colors={colors}
      style={[style, styles.button, disabled]} 
    >
      <Pressable
        onPress={disabled ? null : onPress} 
        disabled={disabled} 
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
      </Pressable>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    shadowColor: "#FFFFFF",
    shadowOpacity: 0.5,
    shadowRadius: 4,
    padding: 10,
    borderRadius: 10,
  }
});