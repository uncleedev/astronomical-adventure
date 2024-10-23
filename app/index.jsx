import { Image, SafeAreaView, StyleSheet, View } from 'react-native';
import React from 'react';
import Typography from '../components/Typography'
import { Colors } from '../constants/Colors'
import CustomButton from '../components/CustomButton'
import { router } from 'expo-router'
import CustomSwiper from '../components/CustomSwiper';
import BackgroundImage from '../components/BackgroundImage';
import ImageAnimation from '../components/ImageAnimation';



export default function Index() {
  return (
    <BackgroundImage>
      <ImageAnimation image={require("../assets/images/planets/Sun.png")} cmstyle={styles.sun} cmheight={150} cmwidth={150}/>
      <ImageAnimation image={require("../assets/images/planets/Mercury.png")} cmstyle={styles.mercury} cmheight={20} cmwidth={20}/>
      <ImageAnimation image={require("../assets/images/planets/Venus.png")} cmstyle={styles.venus} cmheight={30} cmwidth={30}/>
      <ImageAnimation image={require("../assets/images/planets/Earth.png")} cmstyle={styles.earth} cmheight={30} cmwidth={30}/>
      <ImageAnimation image={require("../assets/images/planets/Mars.png")} cmstyle={styles.mars} cmheight={25} cmwidth={25}/>
      <ImageAnimation image={require("../assets/images/planets/Jupiter.png")} cmstyle={styles.jupiter} cmheight={50} cmwidth={50}/>
      <ImageAnimation image={require("../assets/images/planets/Saturn.png")} cmstyle={styles.saturn} cmheight={45} cmwidth={45}/>
      <ImageAnimation image={require("../assets/images/planets/Uranus.png")} cmstyle={styles.uranus} cmheight={40} cmwidth={40}/>
      <ImageAnimation image={require("../assets/images/planets/Neptune.png")} cmstyle={styles.neptune} cmheight={40} cmwidth={40}/>
      <View 
        style={{
          width: "100%",
          height: "100%",
          padding: 24,
          justifyContent: "flex-end"
        }}
      >

          
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
      </View>
    </BackgroundImage>

  );
}

const styles = StyleSheet.create({
  sun: {
    position: "absolute",
    top: 20,
    left: -60, 
  },
  mercury: {
    position: "absolute",
    top: 100,
    left: "30%",
  },
  venus: {
    position: "absolute",
    top: 150,
    left: "30%",
  },
  earth: {
    position: "absolute",
    top: 200,
    left: "40%",
  },
  mars: {
    position: "absolute",
    top: 100,
    left: "65%",
  },
  jupiter: {
    position: "absolute",
    top: 250,
    left: "5%",
  },
  saturn: {
    position: "absolute",
    top: 250,
    left: "55%",
  },
  uranus: {
    position: "absolute",
    top: 300,
    left: "35%",
  },
  neptune: {
    position: "absolute",
    top: 50,
    left: "80%",
  },
});