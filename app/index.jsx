import { Image, SafeAreaView, StyleSheet, View } from 'react-native';
import React from 'react';
import Typography from '../components/Typography'
import { Colors } from '../constants/Colors'
import CustomButton from '../components/CustomButton'
import { router } from 'expo-router'
import { Participants } from '../constants/Participants';
import CardParticipant from '../components/CardParticipant';
import Navigation from '../components/Navigation';
import ImageAnimation from '../components/ImageAnimation';

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <Image  
        source={require("../assets/images/outerspace.png")}  
        style={styles.image} 
      />

      <View 
        style={{
          width: "100%",
          height: "100%",
          padding: 24,
          justifyContent: "space-between"
        }}
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
      </View>
          
    </SafeAreaView>
  );
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
});