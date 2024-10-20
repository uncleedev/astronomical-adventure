import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import Typography from '../../components/Typography'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton';
import HorizontalLine from '../../components/HorizontalLine';
import IconButton from '../../components/IconButton';
import { router } from 'expo-router';
import { Colors } from '../../constants/Colors';

export default function LoginView() {

  const [isChecked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked(!isChecked);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <Image  
        source={require("../../assets/images/outerspace.png")}  
        style={styles.image} 
      />

      <View
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          justifyContent: "space-between",
        }}
      >

        
        <View>
          <Text>Hello</Text>
        </View>

        <View
          style={styles.form}
        >


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
              placeholder="Username" 
              type="text"
              leftIcon={require("../../assets/icons/username.png")}
            />

            <CustomInput 
              placeholder="Password" 
              type="password"
              leftIcon={require("../../assets/icons/password.png")}
              rightIcon="true"
            />
          </View>
          
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: 'space-between',
              gap: 8,
              marginTop: 8
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 8
              }}
            >
              <TouchableOpacity onPress={toggleCheckbox}>
                {isChecked ? (
                  <Image source={require("../../assets/icons/checked.png")} style={styles.icon} />
                ) : (
                  <Image source={require("../../assets/icons/uncheck.png")} style={styles.icon} />
                )}
              </TouchableOpacity>
              <Typography type={"h4"}>Remember me</Typography>
            </View>

            <Typography  type={"h4"} color={'#FF81B5'}>Forgot password?</Typography>
          </View>

          <CustomButton 
            title={"LOGIN"}
            style={{marginTop: 24}}
            onPress={() => router.push("home")}
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

            <HorizontalLine width={144}/>

            <Typography type={"h3"}>OR</Typography>

            <HorizontalLine width={144}/>
          </View>

          <IconButton 
            title={"Continue with google"}
            icon={require("../../assets/icons/google.png")}
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
            <Typography  type={"h4"} color={'#FF81B5'}>Sign up</Typography>
          </View>

        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
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