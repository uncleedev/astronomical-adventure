import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Planets } from '../libs/Planets'
import ImageAnimation from './ImageAnimation'

export default function RenderPlanets() {
  return (
    <View  style={styles.container}>
      <ImageAnimation 
        image={require("../assets/images/planets/Sun.png")}
        cmheight={50}
        cmwidth={50}
      />

      {Planets.map((planet) => (
        <ImageAnimation 
            key={planet.name}
            image={planet.image}
            cmheight={30}
            cmwidth={30}
        />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: "row",
        paddingHorizontal: 24
    }
})