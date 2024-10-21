import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import Navigation from '../../components/Navigation'
import Typography from '../../components/Typography'
import { Participants } from '../../constants/Participants'
import CardParticipant from '../../components/CardParticipant'

export default function AboutView() {
  return (
    <View style={styles.container}>
      <Navigation  />

      <View>
        <Typography type={"h2"} myStyle={{borderBottomColor: Colors.accent[0], borderBottomWidth: 1, width: 95, paddingBottom: 6}}>About us</Typography>
        <Typography type={"p"} myStyle={{marginTop: 16, letterSpacing: 2}}>
          Astronomical Adventures: Navigating the Solar System is an engaging exploration of our cosmic neighborhood, 
          This presentation or educational program invites participants to discover the unique features, mysteries, and wonders of each 
          planet from the blazing heat of Mercury to the icy realms of Neptune.
        </Typography>
      </View>

      <View>
        <Typography type={"h2"} myStyle={{borderBottomColor: Colors.accent[0], borderBottomWidth: 1, width: 140, paddingBottom: 6}}>Participation</Typography>
        
        <ScrollView
          style={{marginTop: 16, height: 458}}
        >
          <View
            style={{gap: 16, paddingBottom: 24}}
          >
            {Participants.map((student) => (
              <CardParticipant 
              key={student.lastname}
              lastname={student.lastname}
              avatar={student.avatar}
              description={student.description}
              role={student.role}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 24,
    gap:32
  }
})