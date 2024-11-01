import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, Alert } from 'react-native'
import React, { useState } from 'react'
import Typography from '../../../components/Typography';
import CustomInput from '../../../components/CustomInput';
import CustomButton from '../../../components/CustomButton';
import HorizontalLine from '../../../components/HorizontalLine';
import IconButton from '../../../components/IconButton';
import { Link, router } from 'expo-router';
import { Colors } from '../../../constants/Colors';
import BackgroundImage from '../../../components/BackgroundImage';
import Divider from '../../../components/Divider';
import RenderPlanets from '../../../components/RenderPlanets';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebaseConfig';


export default function SignupView() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const handleSignup = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            Alert.alert("Success", "Successfully created an account");
            setEmail("")
            setPassword("")
        } catch (error) {
            let errorMessage;
    
            switch (error.code) {
                case 'auth/invalid-email':
                    errorMessage = "The email address is not valid.";
                    break;
                case 'auth/email-already-in-use':
                    errorMessage = "The email address is already in use.";
                    break;
                case 'auth/weak-password':
                    errorMessage = "The password is too weak. It should be at least 6 characters.";
                    break;
                case 'auth/operation-not-allowed':
                    errorMessage = "Email/password accounts are not enabled.";
                    break;
                default:
                    errorMessage = "An unknown error occurred.";
                    break;
            }
    
            Alert.alert("Error", errorMessage);
            console.log("Error: ", error);
        }
    }

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

        <RenderPlanets />
      
        <Divider>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography type={"h2"}>Create an</Typography>
            <Typography type={"h2"}>Account</Typography>
          </View>

          <View 
            style={{
              width: "100%",
              gap: 12,
              marginTop: 41,
              marginBottom: 16
            }}
          >
            <CustomInput 
              placeholder="Email" 
              type="text"
              leftIcon={require("../../../assets/icons/username.png")}
              value={email}
              onChangeText={setEmail}
            />

            <CustomInput 
              placeholder="Password" 
              type="password"
              leftIcon={require("../../../assets/icons/password.png")}
              rightIcon="true"
              value={password}
              onChangeText={setPassword} 
            />
          </View>
          

          <CustomButton 
            title={"Sign Up"}
            onPress={handleSignup}
          />

          <View
            style={{
              width:  "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: 'space-between', 
              marginVertical: 15
            }}
          >

            <HorizontalLine width={"40%"}/>

            <Typography type={"h3"}>OR</Typography>

            <HorizontalLine width={"40%"}/>
          </View>

          <IconButton 
            title={"Continue with google"}
            icon={require("../../../assets/icons/google.png")}
          />

          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 4,
              marginTop: 12
            }}
          >
            <Typography type={"h4"}>Already have an account?</Typography>
            <Link href={"login"}>
                <Typography  type={"h4"} color={'#FF81B5'}>Sign In</Typography>
            </Link>
          </View>

        </Divider>
      </View>
    </BackgroundImage>
  )
}

const styles = StyleSheet.create({
  form: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 45,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.background,
    borderTopWidth: 2,
    borderColor: Colors.accent[0]
  },
  icon: {
    width: 24,
    height: 24,
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    resizeMode: "cover",
  },
})