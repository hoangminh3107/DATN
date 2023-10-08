import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
const LoginAndSignUpScreen = () => {
  const [isSelect, setIsSelect] = useState(0)
  const text = ['Đăng nhập', 'Đăng ký']

  const BodyLogin = () => {
    return (
      <ScrollView >
        <Image
          source={require('../assets/image-logo.png')}
          style={styles.imageLogo}
        />
        <View style={styles.loginSignUp}>
          {
            text.map((item, index) => (
              <TouchableOpacity onPress={() => setIsSelect(index)} key={index}>
                <Text style={styles.text}>{item}</Text>
                {
                  isSelect === index ? <View style={styles.rowOrange} /> : null
                }
              </TouchableOpacity>
            ))
          }
        </View>
        <View style={styles.viewLogin}>
          <Text style={styles.text2}>Số điện thoại</Text>
          <TextInput style={styles.textInput} placeholder='Nhập số điện thoại của bạn' />
          <Text style={styles.text2}>Mật khẩu</Text>
          <TextInput style={styles.textInput} secureTextEntry={true} placeholder='Nhập mật khẩu của bạn' />
          <Text style={styles.forgotPass}>Quên mật khẩu !</Text>
        </View>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.textButton}>Dang nhap</Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }
  const BodySignUp = () => {
    return (
      <ScrollView >
        <Image
          source={require('../assets/image-logo.png')}
          style={styles.imageLogo}
        />
        <View style={styles.loginSignUp}>
          {
            text.map((item, index) => (
              <TouchableOpacity onPress={() => setIsSelect(index)} key={index}>
                <Text style={styles.text}>{item}</Text>
                {
                  isSelect === index ? <View style={styles.rowOrange} /> : null
                }
              </TouchableOpacity>
            ))
          }
        </View>
        <View style={styles.viewLogin}>
          <Text style={styles.text2}>Số điện thoại</Text>
          <TextInput style={styles.textInput} placeholder='Nhập số điện thoại của bạn' />
          <Text style={styles.text2}>Mật khẩu</Text>
          <TextInput style={styles.textInput} secureTextEntry={true} placeholder='Nhập mật khẩu của bạn' />
          <Text style={styles.text2}>Nhập lại mật khẩu</Text>
          <TextInput style={styles.textInput} secureTextEntry={true} placeholder='Nhập lại mật khẩu của bạn' />
         
        </View>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.textButton}>Dang Ky</Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }
  return (
    <View style={styles.container}>
    {
        isSelect == 0 ? <BodyLogin /> : <BodySignUp />
    }
     
    </View>
  )
}




export default LoginAndSignUpScreen

