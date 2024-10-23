import React, { useEffect, useRef } from 'react';
import { Animated, Image, StyleSheet, View, Easing } from 'react-native';

const ImageAnimation = ({image, cmheight, cmwidth, cmstyle}) => {
  const rotateValue = useRef(new Animated.Value(0)).current;

  const defaultImage = require("../assets/images/icon.png")
  const rotateAnimation = () => {
    Animated.timing(rotateValue, {
      toValue: 1,
      duration: 10000, 
      easing: Easing.linear, 
      useNativeDriver: true,
    }).start(() => {
      rotateValue.setValue(0); 
      rotateAnimation(); 
    });
  };

  useEffect(() => {
    rotateAnimation()
  }, []);


  const rotateInterpolate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'], 
  });

  return (
    <View style={styles.container}>
      <Animated.Image
        source={image ? image : defaultImage}
        style={[{height: cmheight ? cmheight : 200, width: cmwidth ? cmheight : 200}, { transform: [{ rotate: rotateInterpolate }] }, cmstyle]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default ImageAnimation;