import { StyleSheet, Text, View, ImageBackground, SafeAreaView } from 'react-native'
import React from 'react'
import Typography from '../components/Typography'
import { Colors } from '../constants/Colors'
import CustomButton from '../components/CustomButton'
import { router } from 'expo-router'

export default function index() {
  return (
    <SafeAreaView
      style={{
        width: "100%",
        height: "auto"
      }}
    >
        <ImageBackground
          source={require("../assets/images/outerspace.jpg")}
          style={styles.container}
        >

          <View
            style={{
              height: 677,
              width: "auto"
            }}
          >

          </View>

          <View
            style={{gap: 24}}
          >
            <View
              style={{gap: 8}}
            >
              <Typography type={"h1"}>ASTRONOMICAL <Typography type={"h1"} color={Colors.primary[0]}>ADENTURE</Typography></Typography>
              <Typography type={"h4"}>A Journey Through Space</Typography>
            </View>

            <CustomButton
              onPress={() => router.push("login")} 
              title={"Gets Started"}
            />
          </View>

        </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 393,
    height: 852,
    padding: 24,
    display: "flex",
    justifyContent: 'space-between',
    backgroundColor: Colors.background
  }
})