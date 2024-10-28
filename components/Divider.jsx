import { StyleSheet, Text, View } from 'react-native'
import React, { Children } from 'react'
import BoxShadow from './BoxShadow'
import { Colors } from '../constants/Colors'

export default function Divider({children}) {
  return (
    <BoxShadow cmRadius={28}>
        <View style={styles.container}>
            {children}
        </View>
    </BoxShadow>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 526,
    backgroundColor: Colors.background,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    borderWidth: 2,
    borderColor: Colors.accent[0],
    padding: 24
  }
})