import { ImageBackground, StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import Typography from '../../components/Typography';
import { Colors } from '../../constants/Colors';
import { Planets } from '../../constants/Planets';
import CardPlanet from '../../components/CardPlanet';

export default function Index() {

    const renderPlanetPairs = () => {
        const pairs = [];
        for (let i = 0; i < Planets.length; i += 2) {
            pairs.push(Planets.slice(i, i + 2));
        }
        return pairs;
    };

  return (
    <ImageBackground
      source={require("../../assets/images/wrapper-bac.png")}
      style={styles.container}
    >
      <View
        style={{
            gap: 16
        }}
      >
        <Typography 
          type={"h2"} 
          myStyle={{
            width: 79, 
            borderBottomColor: Colors.accent[0], 
            borderBottomWidth: 1,
            paddingBottom: 6 
          }}
        >
          Planets
        </Typography>

        <ScrollView
          style={styles.scrollView}
        >
          {renderPlanetPairs().map((pair, index) => (
            <View key={index} style={styles.row}>
              {pair.map((planet) => (
                <View key={planet.name} style={styles.cardContainer}>
                  <CardPlanet 
                    name={planet.name}
                    description={planet.description}
                    srcpath={planet.srcpath}
                  />
                </View>
              ))}
            </View>
          ))}
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 393,
    height: 852,
    paddingHorizontal: 24,
    paddingTop: 24,
    display: 'flex',
    justifyContent: "flex-end",
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  scrollView: {
    width: "100%",
    paddingTop: 5,
    height: 451,
    overflow: 'hidden', 
  },
  cardContainer: {
    margin: 8.5 
  },
});