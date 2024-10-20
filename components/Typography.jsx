import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors } from '../constants/Colors';

const Typography = ({ type, children, myStyle, color }) => {

  const textStyles = {
    h1: styles.h1,
    h2: styles.h2,
    h3: styles.h3,
    h4:  styles.h4,
    p: styles.p,
  };

  const selectedStyle = textStyles[type] || styles.p; 

  return (
    <Text style={[selectedStyle, myStyle, {color: color ||  Colors.text}]}>
      {children}
    </Text>
  );
};


const styles = StyleSheet.create({
  h1: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'Oswald'

  },
  h2: {
    fontSize: 24,
    fontWeight: 'semibold',
    fontFamily: 'Zilla-semi'

  },
  h3: {
    fontSize: 16,
    fontWeight: 'medium',
    fontFamily: 'Zilla-med'

  },
  h4: {
    fontSize: 14,
    fontWeight: 'medium',
    fontFamily: 'Zilla-med',
    opacity: 0.6
  },
  p: {
    fontSize: 13,
    fontFamily: 'Zilla-reg',
  },
});

export default Typography;