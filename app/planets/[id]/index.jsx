import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Typography from '../../../components/Typography'
import Navigation from '../../../components/Navigation';
import { Colors } from '../../../constants/Colors';
import { useLocalSearchParams } from 'expo-router';
import ImageAnimation from '../../../components/ImageAnimation';
import BackgroundImage from '../../../components/BackgroundImage';
import Divider from '../../../components/Divider';
import CustomSwiper from '../../../components/CustomSwiper';
import { Planets } from '../../../constants/Planets';

export default function PlanetView() {
    const data = useLocalSearchParams();
    const id = Number(data.id);

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
                        paddingTop: 24,
                    }}
                >
                    <Navigation isBack={true} />
                </View>
                <CustomSwiper index={id}/>
            </View>
        </BackgroundImage>
    );
}

const styles = StyleSheet.create({ 
});