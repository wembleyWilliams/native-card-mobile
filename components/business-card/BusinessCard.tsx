import React, {useEffect, useState} from "react"
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import ProfileSection from "../sections/profile-section/ProfileSection";
import Description from "../sections/description-section/DescriptionSection";
import SocialSection from "../sections/social-section/SocialSection";
import ErrorPage from "../../pages/404NotFound";
import {State} from "../../redux/reducers/index"
import services from "../../services";
import {setBusinessDetails} from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import {COLORS, FONTS, PADDING, SIZES} from "../../constants/theme";
import {Dimensions} from 'react-native';
import LottieView from "react-native-web-lottie";
import {useParams} from "react-router-dom";


const BusinessCard = () => {
    let {cardId} = useParams()
    const [loadingComplete, setLoadingComplete] = useState(false)
    const [errorPage, setErrorPage] = useState(false)
    const [isOpenSaveContactModal, setIsOpenSaveContactModal] = useState(false)
    let animRef = null;

    const dispatch = useDispatch();
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const description = useSelector(
        (state: State) => state.application.application.BusinessData?.description
    )
    const logo = useSelector(
        (state: State) => state.application.application.BusinessData?.logo
    )

    const socialMediaArray = useSelector(
        (state: State) => state.application.application.BusinessData?.socialMedia
    )

    const contact = useSelector(
        (state: State) => state.application.application.BusinessData?.contact
    )

    const styles = StyleSheet.create({
        lottie:{
            width: 400,
            height: 400,
        },
        loadingText: {
            width: 300,
            color: 'white',
            fontWeight: 'bold',
            fontSize: SIZES.medium,
            textAlign: "center",

        },
        wrapper: {
            width: windowWidth,
            height: windowHeight,
            margin:'auto',
            flex: 1,
            backgroundColor: 'transparent',
            alignItems: 'center',
            justifyContent: 'center',
        },
        container: {
            position: "absolute",
            height: windowHeight - (windowHeight*0.2),
            width: windowWidth > 320? windowWidth - (windowWidth*0.2): 320,
            margin: 'auto',
            alignItems: 'center',
            justifyContent: 'space-around',

        },
        linkButtonText: {
            color: '#FFF',
            fontWeight:'bold',
            margin:"auto"
        },
        linkButton : {
            height: 'auto',
            backgroundColor: COLORS.primary,
            borderRadius: 50,
            alignContent: "center",
            paddingHorizontal: PADDING.button
        },
        loadingAnim: {
            // marginTop: -16
        }
    });

    useEffect(()=> {
        console.log("Retrieving business data")
            services
                .getBusiness(cardId)
                .then((res)=>{
                    if(res){
                        dispatch(setBusinessDetails(res))
                        setLoadingComplete(true)
                        console.log("Business Data retrieved successfully");
                    }
                    else if(!res){
                        setLoadingComplete(false)
                        setErrorPage(true)
                        console.log('No network data retrieved')
                    }
                })
                .catch((err)=>{
                    console.log(err)
                })

        console.log("Retrieving user data")
    },[])

    useEffect(()=>{
        // @ts-ignore
        animRef.play();
    },[])
    return (
        <View style={styles.wrapper}>
        { loadingComplete ? (
            <>
                <View style={styles.container}>
                    <View style={[{zIndex:0,marginTop:40}]}>
                        <ProfileSection image={{data: logo?.data, mime: logo?.mime}}/>
                    </View>
                    <View style={[{zIndex:2,marginTop:-60}]}>
                        <Description
                            description={description ? description : 'No Description'}/>
                    </View>
                    <View style={[{zIndex:1,marginTop:-100,marginBottom:20}]}>
                        <SocialSection socialMedia={socialMediaArray}/>
                    </View>
                </View>
            </>
        ) : (
            !errorPage? (
                <View style={styles.container}>
                    <LottieView
                        style={[styles.loadingAnim,{ zIndex:1}]}
                        ref={(ref) => {
                        animRef = ref;
                        }}
                        source={require("../../common/loader/card-loading-animation.json")}
                        autoPlay={false}
                        loop={true}
                        speed={1.5}
                    />
                    <Text style={[styles.loadingText,{zIndex:2, marginTop:-300}]}>Fetching your data</Text>
                </View>
            ):(
                <ErrorPage />
            )

        )}
        </View>
    );

}



export default BusinessCard;