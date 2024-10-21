import { StyleSheet, Text, View } from 'react-native'

export default function BoxShadow({children, customRadius}) {
  return (
    <View style={[styles.shadow, {borderRadius: customRadius ? customRadius : 10}]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
    shadow: {
        width: "100%",
            // iOS
        shadowColor: '#ffffff', 
        shadowOffset: {
            width: 0,
            height: 2, 
        },
        shadowOpacity: 0.3, 
        shadowRadius: 4, 
        // Android
        elevation: 3, 
    }
})