import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import Typography from '../components/Typography'
import { Colors } from '../constants/Colors'
import CustomButton from '../components/CustomButton'
import { router } from 'expo-router'

export default function index() {
  return (
    <View
      style={{
        width: "100%",
        height: "100%"
      }}
    >

      <ImageBackground
        source={require("../assets/images/outerspace.png")}
        style={styles.container}
      >

        <View>

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
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 393,
    height: 852,
    padding: 24,
    display: "flex",
    justifyContent: 'space-between',
  }
})