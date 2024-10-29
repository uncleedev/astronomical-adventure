import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Typography from '../../components/Typography'
import { router } from 'expo-router';
import CardPlanet from '../../components/CardPlanet';
import { Planets } from '../../libs/Planets';
import { Colors } from '../../constants/Colors';
import Navigation from '../../components/Navigation';
import BackgroundImage from '../../components/BackgroundImage';
import Divider from '../../components/Divider';
import RenderPlanets from '../../components/RenderPlanets';

export default function HomeView() {

  const renderPlanetPairs = () => {
    const pairs = [];
    for (let i = 0; i < Planets.length; i += 2) {
      pairs.push(Planets.slice(i, i + 2));
    }
    return pairs;
  };

  return (

    <BackgroundImage>
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
            paddingTop: 24
          }}
        >
          <Navigation isBack={false} />

        </View>
        
        <RenderPlanets />

        <Divider>
          <Typography type={"h2"} myStyle={{borderBottomColor: Colors.accent[0], borderBottomWidth: 1, width: 79, paddingBottom: 6}}>Planets</Typography>

          <ScrollView
            style={styles.scrollView}
          >
            <View
              style={{
                width: "100%",
                gap: 10,
                marginVertical: 6
              }}
            >
              {renderPlanetPairs().map((pair, index) => (
                <View key={index} style={styles.row}>
                  {pair.map((planet) => (
                    <View key={planet.id} style={{ width: "46%"}}>
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
        </Divider>
      </View>
    </BackgroundImage>
  )
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  row: {
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  scrollView: {
    width: "100%",
    height: "75%",
    overflow: 'hidden',
    marginTop: 10,
  },
})