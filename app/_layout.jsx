import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { useFonts } from 'expo-font';

export default function RootLayout() {

    const [loaded] = useFonts({
        'Oswald':  require('../assets/fonts/Oswald/static/Oswald-Bold.ttf'),
        "Zilla-reg": require("../assets/fonts/Zilla_Slab/ZillaSlab-Regular.ttf"),
        "Zilla-med": require("../assets/fonts/Zilla_Slab/ZillaSlab-Medium.ttf"),
        "Zilla-semi": require("../assets/fonts/Zilla_Slab/ZillaSlab-SemiBold.ttf")
    })

    if (!loaded) {
        return null; 
    }

  return (
      <Stack>
          <Stack.Screen 
            name='index'
            options={{
              headerShown: false
            }} 
          />
          <Stack.Screen 
            name='login/index'
            options={{
              headerShown: false
            }} 
          />
          <Stack.Screen 
            name='home/index'
            options={{
              headerShown: false
            }} 
          />
          <Stack.Screen 
            name='planets/[id]/index'
            options={{
              headerShown: false
            }} 
          />
          <Stack.Screen 
            name='about/index'
            options={{
              headerShown: false
            }} 
          />

      </Stack>
  )
}

const styles = StyleSheet.create({
  container: {

  }
})