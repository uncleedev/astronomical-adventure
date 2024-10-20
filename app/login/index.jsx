import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Typography from '../../components/Typography'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton';
import HorizontalLine from '../../components/HorizontalLine';
import IconButton from '../../components/IconButton';
import { router } from 'expo-router';

export default function LoginView() {

  const [isChecked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked(!isChecked);
  };

  return (
    <ImageBackground
      source={require("../../assets/images/wrapper-bac.png")}
      style={styles.container}
    >
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
            rightIcon={require("../../assets/icons/username.png")}
          />

          <CustomInput 
            placeholder="Password" 
            type="password"
            rightIcon={require("../../assets/icons/password.png")}
            leftIcon="true"
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
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 393,
    height: 852,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 45,
    display: 'flex',
    justifyContent: "flex-end"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 24,
    height: 24,
  }
})