import { StyleSheet, Text, View } from 'react-native'

export default function BoxShadow({children, cmRadius, cmHeight, cmWidth, cmStyle, cmElevation }) {
  return (
    <View style={[styles.shadow, {borderRadius: cmRadius ? cmRadius : 10},  {height: cmHeight, width: cmWidth}, {elevation: cmElevation ? cmElevation : 0}, cmStyle]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
    shadow: {
            // iOS
        shadowColor: '#ffffff', 
        shadowOffset: {
            width: 0,
            height: 2, 
        },
        shadowOpacity: 0.3, 
        shadowRadius: 4, 
    }
})