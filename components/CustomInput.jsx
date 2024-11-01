import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import BoxShadow from './BoxShadow';
import { Colors } from '../constants/Colors';

export default function CustomInput({ 
    placeholder, 
    type = 'text', 
    rightIcon = false,
    leftIcon,
    onChangeText,
    value 
}) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <BoxShadow cmWidth={"100%"} cmElevation={2}>
            <View style={styles.container}>
                {leftIcon && (
                    <Image source={leftIcon} style={[styles.icon, styles.leftIcon]} />
                )}
                <TextInput 
                    style={[styles.input, isFocused && { borderColor: Colors.primary[0], borderWidth: 2 }]}
                    placeholder={placeholder}
                    secureTextEntry={type === 'password' && !isPasswordVisible}
                    keyboardType={type === 'number' ? 'numeric' : 'default'}
                    placeholderTextColor={'#9B9DA2'}
                    onFocus={() => setIsFocused(true)} 
                    onBlur={() => setIsFocused(false)} 
                    onChangeText={onChangeText}
                    value={value}
                />
                {rightIcon && (
                    <TouchableOpacity onPress={togglePasswordVisibility} style={styles.rightIcon}>
                        <Image 
                            source={isPasswordVisible ? require("../assets/icons/show.png") : require("../assets/icons/hide.png")} 
                            style={styles.icon} 
                        />
                    </TouchableOpacity>
                )}
            </View>
        </BoxShadow>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        borderRadius: 10,
        position: 'relative',
    },
    input: {
        paddingVertical: 12,
        paddingHorizontal: 48,
        fontSize: 16,
        color: Colors.text,
        borderColor: 'transparent', 
        borderWidth: 1, 
        borderRadius: 5, 
    },
    rightIcon: {
        position: 'absolute',
        right: 16,
        top: 16,
    },
    leftIcon: {
        position: 'absolute',
        left: 16,
        top: 16,
    },
    icon: {
        width: 24,
        height: 24,
    },
});