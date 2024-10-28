import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function BackgroundImage({children}) {
  return (
    <SafeAreaView style={styles.container}>
        <Image 
            source={require("../assets/images/outerspace.png")}  
            style={styles.image} 
        />

        {children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
    },
    image: {
    position: "absolute",
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    resizeMode: "cover",
    },
})