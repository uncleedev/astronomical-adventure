import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Typography from '../../../components/Typography'
import Navigation from '../../../components/Navigation';
import { Colors } from '../../../constants/Colors';
import { useLocalSearchParams } from 'expo-router';

export default function PlanetView() {
    const data = useLocalSearchParams()

  return (
    <SafeAreaView
      style={{
        flex: 1,
        width: "100%",
      }}
    >
      <Image  
        source={require("../../../assets/images/outerspace.png")}  
        style={styles.image} 
      />

      <View
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          justifyContent: "space-between",
        }}
      >

        
        <View 
            style={{
                paddingHorizontal: 24,
                paddingTop: 24,
            }}
        >
            <Navigation isBack={true} />

            <View 
                style={{
                    width: "100%",
                    alignItems: 'center'
                }}
            >
                <Image source={data.image} style={{height: 200, width: 200}}/>
             </View>
        </View>

        <View
          style={styles.form}
        >
          <Typography type={"h2"} myStyle={{borderBottomColor: Colors.accent[0], borderBottomWidth: 1, width: 100, paddingBottom: 6}}>{data.name}</Typography>

          <Typography type={"p"} myStyle={{letterSpacing: 2, marginTop: 16}}>{data.details}</Typography>

        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  form: {
    height: 526,
    paddingHorizontal: 24,
    paddingTop: 24,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    display: "flex",
    flexDirection: "column",
    backgroundColor: Colors.background,
    borderTopWidth: 2,
    borderColor: Colors.accent[0]
  },
  icon: {
    width: 24,
    height: 24,
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    resizeMode: "cover",
  },
  row: {
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  scrollView: {
    width: "100%",
    height: 451,
    overflow: 'hidden',
    marginTop: 16
  },
})