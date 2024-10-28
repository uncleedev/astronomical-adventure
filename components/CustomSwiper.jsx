import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Swiper from 'react-native-swiper';
import { Planets } from '../libs/Planets';
import ImageAnimation from './ImageAnimation';
import Typography from './Typography';
import Divider from './Divider';
import { Colors } from '../constants/Colors';


export default function CustomSwiper({ index = 0  }) {
  const [initialIndex, setInitialIndex] = useState(index ? index : 0);

  return (
    <Swiper
      index={initialIndex}
    >
      {Planets.map((planet) => (
        <React.Fragment key={planet.id}>
          <ImageAnimation
            image={planet.image}
          />

          <Divider>
            <Typography type={"h2"} myStyle={{ borderBottomColor: Colors.accent[0], borderBottomWidth: 1, width: 100, paddingBottom: 6 }}>
                {planet.name}
            </Typography>
            <Typography type={"p"} myStyle={{ letterSpacing: 2, marginTop: 16 }}>
                {planet.details}
            </Typography>
          </Divider>
        </React.Fragment>

        
      ))}
    </Swiper>
  );
}

const styles = StyleSheet.create({});