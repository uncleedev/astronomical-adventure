import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import CustomButton from '../../components/CustomButton';
import Typography from '../../components/Typography';
import { router } from 'expo-router';
import CardPlanet from '../../components/CardPlanet';
import { Planets } from '../../constants/Planets';
import { Colors } from '../../constants/Colors';

export default function Index() {
  const renderPlanetPairs = () => {
    const pairs = [];
    for (let i = 0; i < Planets.length; i += 2) {
      pairs.push(Planets.slice(i, i + 2));
    }
    return pairs;
  };

  return (
    <SafeAreaView 
      style={styles.container}
    >
      <View>
        <CustomButton
          onPress={() => router.push("login")} 
          title={"LOGIN"}
        />
  
        <CustomButton 
          onPress={() => router.push("about")}
          title={"About"}
        />
  
        <Typography type={"h1"}>hello</Typography>
  
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor:  Colors.background,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    scrollView: {
      width: 390,
      height: 451,
      paddingTop: 5,
      paddingHorizontal: 24,
      overflow: 'hidden', // Hide scrollbar
    },
    cardContainer: {
      marginHorizontal: 8.5, // 17px total spacing (8.5px left and right)
      marginVertical: 8.5, // 17px total spacing (8.5px top and bottom)
    },
  });