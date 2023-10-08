import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { useState }from 'react'
import { styles } from './styles'
const OnBoardingScreen = ({navigation}) => {
    return (
        <ScrollView style={styles.container} >
            <BodyOnBoarding1 number={0} navigation={navigation}/>
           
        </ScrollView>
    )
}

const BodyOnBoarding1 = (props) => {
    const [pageNumber, setPageNumber] = useState(props.number)
   
    const handleIndex =()=>{
       
        if(pageNumber === 3){
            props.navigation.navigate('LoginAndSignUp')
            return
        }
        setPageNumber(pageNumber + 1)
    }
    const imagePaths = [
        require('../assets/image-onboarding-1.png'),
        require('../assets/image-onboarding-2.png'),
        require('../assets/image-onboarding-3.png'),
        require('../assets/image-onboarding-4.png'),
    ];
    const imagePath = imagePaths[pageNumber];
    const imagePathTexts = [
        require('../assets/text-onboarding-1.png'),
        require('../assets/text-onboarding-2.png'),
        require('../assets/text-onboarding-3.png'),
        require('../assets/text-onboarding-4.png'),
    ];
    const imagePathText = imagePathTexts[pageNumber];
    const imagePathOnBoardings = [
        require('../assets/progress1.png'),
        require('../assets/progress2.png'),
        require('../assets/progress3.png'),
        require('../assets/progress4.png'),
    ];
    const imagePathOnBoarding = imagePathOnBoardings[pageNumber];

    const texts = [
        'Thưởng thức hàng nghìn món ngon với nhiều ưu đãi khủng chỉ có trên TAKO',
        'Cập nhật thông tin khuyến mãi khủng cùng nhiều món ngon hấp dẫn',
        'Cập nhật thông tin khuyến mãi khủng cùng nhiều món ngon hấp dẫn',
        'Cùng khám phá nhé! Đăng kí ngay thôi nào!'
    ];
    const text = texts[pageNumber];
    const textButtons = [
        'KHÁM PHÁ THÊM',
        'CẤP QUYỀN',
        'CẤP QUYỀN',
        'ĐĂNG KÝ/ĐĂNG NHẬP'
    ];
    const textButton = textButtons[pageNumber];

 
    return (
        <View style={styles.container}>
            <View style={styles.backGroundBigImage}>
                <Image
                    source={imagePath}
                    style={styles.bigImage}
                />
            </View>
            <Image
                source={imagePathText}
                style={styles.textImage}
            />
            <Text style={styles.text}>
                {text}
            </Text>

            <Image
                source={imagePathOnBoarding}
                style={styles.textImage}
            />

            <TouchableOpacity style={styles.button} onPress={handleIndex}>
                <Text style={styles.textButton}>{textButton}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default OnBoardingScreen

