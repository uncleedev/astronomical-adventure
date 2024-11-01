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
import { signInWithEmailAndPassword, GoogleAuthProvider} from 'firebase/auth';
import { auth } from '../../../firebaseConfig';

export default function LoginView() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    // Input validation
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password.");
      return;
    }
  
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      Alert.alert("Success", `Successfully logged in as: ${userCredential.user.email}`);
      console.log("Successfully logged in: ", userCredential.user);
    } catch (error) {
      // Improved error handling
      let errorMessage;
  
      switch (error.code) {
        case 'auth/invalid-email':
          errorMessage = 'Invalid email format.';
          break;
        case 'auth/user-not-found':
          errorMessage = 'No user found with this email.';
          break;
        case 'auth/wrong-password':
          errorMessage = 'Incorrect password.';
          break;
        default:
          errorMessage = 'An error occurred. Please try again.';
      }
  
      Alert.alert("Error", errorMessage);
      console.error("Login error: ", error);
    }
  }

  const [isChecked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked(!isChecked);
  };

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
            <Typography type={"h2"}>LOGIN TO YOUR</Typography>
            <Typography type={"h2"}>ACCOUNT</Typography>
          </View>

          <View 
            style={{
              width: "100%",
              gap: 12,
              marginTop: 41
            }}
          >
            <CustomInput 
              placeholder="Email" 
              type="text"
              leftIcon={require("../../../assets/icons/username.png")}
              onChangeText={setEmail}
              value={email}
            />

            <CustomInput 
              placeholder="Password" 
              type="password"
              leftIcon={require("../../../assets/icons/password.png")}
              rightIcon="true"
              onChangeText={setPassword}
              value={password}

            />
          </View>
          
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: 'space-between',
              gap: 8,
              marginTop: 8,
              marginBottom: 16
            }}
          >

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: "center",
                gap: 8,
              }}
            >
              <TouchableOpacity onPress={toggleCheckbox}>
                {isChecked ? (
                  <Image source={require("../../../assets/icons/checked.png")} style={styles.icon} />
                ) : (
                  <Image source={require("../../../assets/icons/uncheck.png")} style={styles.icon} />
                )}
              </TouchableOpacity>
              <Typography type={"h4"}>Remember me</Typography>
            </View>

            <Typography  type={"h4"} color={'#FF81B5'}>Forgot password?</Typography>  

          </View>

          <CustomButton 
            title={"LOGIN"}
            onPress={handleLogin}
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
            <Typography type={"h4"}>Don't have an account?</Typography>
            <Link href={"/signup"}><Typography  type={"h4"} color={'#FF81B5'}>Sign up</Typography></Link>
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