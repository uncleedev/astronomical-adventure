import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Typography from '../../components/Typography'
import { router } from 'expo-router';
import CardPlanet from '../../components/CardPlanet';
import { Planets } from '../../constants/Planets';
import { Colors } from '../../constants/Colors';
import Navigation from '../../components/Navigation';

export default function HomeView() {

  const renderPlanetPairs = () => {
    const pairs = [];
    for (let i = 0; i < Planets.length; i += 2) {
      pairs.push(Planets.slice(i, i + 2));
    }
    return pairs;
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        width: "100%",
      }}
    >
      <Image  
        source={require("../../assets/images/outerspace.png")}  
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
          <Navigation isBack={false} />
        </View>

        <View
          style={styles.form}
        >
          <Typography type={"h2"} myStyle={{borderBottomColor: Colors.accent[0], borderBottomWidth: 1, width: 79, paddingBottom: 6}}>Planets</Typography>

          <ScrollView
            style={styles.scrollView}
          >
            <View
              style={{
                width: "100%",
                gap: 10
              }}
            >
              {renderPlanetPairs().map((pair, index) => (
                <View key={index} style={styles.row}>
                  {pair.map((planet) => (
                    <View key={planet.name} style={{ width: "48%"}}>
                      <CardPlanet 
                        name={planet.name}
                        description={planet.description}
                        srcpath={planet.image}
                        onPress={() => router.push({
                          pathname: '/planets/[id]',
                          params: planet
                        })}
                      />
                    </View>
                  ))}
                </View>
              ))}
            </View>
          </ScrollView>
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
    paddingHorizontal: 24,
    paddingTop: 24,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
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