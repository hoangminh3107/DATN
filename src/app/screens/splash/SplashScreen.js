import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './styles' 
const SplashScreen = ({navigation}) => {

  const handleNextScreen = () =>{
    navigation.navigate('Onboarding')
  }
  
  return (
    <TouchableOpacity style={styles.container} onPress={handleNextScreen}>
      <Image 
        style={styles.imageSplash}
        source={require('../assets/image-splash.png')}
       />
    </TouchableOpacity>
  )
}

export default SplashScreen

