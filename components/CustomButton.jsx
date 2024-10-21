import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/Colors';
import Typography from './Typography';
import BoxShadow from './BoxShadow';

export default function CustomButton({
  title,
  style,
  onPress, 
  colors = [Colors.primary[0], Colors.primary[1]],
  disabled = false, 
}) {
  return (
    <BoxShadow >
      <LinearGradient
        colors={colors}
        style={[style, styles.button, disabled]} 
      >
        <Pressable
          style={{
            width: "100%",
            alignItems: "center"
          }}
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
    </BoxShadow>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center'
  }
});