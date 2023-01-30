import React, {useEffect, useState} from "react"
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import create = StyleSheet.create;
import ProfileSection from "../sections/profile-section/ProfileSection";
import Description from "../sections/description-section/DescriptionSection";
import SocialSection from "../sections/social-section/SocialSection";
import {State} from "../../redux/reducers/index"
import services from "../../services";
import {setBusinessDetails} from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import AnimatedLoader from "react-native-animated-loader";
import {FONTS, SIZES} from "../../constants/theme";

interface Props {

}

const BusinessCard = (props: Props) => {
    const [loadingComplete, setLoadingComplete] = useState(false)
    const dispatch = useDispatch();
    const description = useSelector(
        (state: State) => state.application.application.BusinessData?.description
    )
    const logo = useSelector(
        (state: State) => state.application.application.BusinessData?.logo
    )

    const socialMediaArray = useSelector(
        (state: State) => state.application.application.BusinessData?.socialMedia
    )
    useEffect(()=> {
        console.log("Retrieving business data")
            services
                .getBusiness()
                .then((res)=>{
                    if(res)
                        dispatch(setBusinessDetails(res))
                        setLoadingComplete(true)
                        console.log("Business Data retrieved successfully");
                })
                .catch((err)=>{
                    console.log(err)
                })

        console.log("Retrieving user data")
    },[])

    return (
        <View style={styles.wrapper}>
        { loadingComplete ? (

                <View style={styles.container}>
                    <ProfileSection image={{data:logo?.data,mime:logo?.mime}}/>
                    <Description
                        description={description? description : 'No Description'}
                    />
                    <SocialSection socialMedia={socialMediaArray}/>
                </View>

        ) : (
            <View style={styles.container}>
                <AnimatedLoader
                    source={require("../../common/loader/card-loading-animation.json")}
                    visible={!loadingComplete}
                    // visible={true}
                    overlayColor="rgba(255,255,255,0)"
                    animationStyle={styles.lottie}
                    speed={1.5}
                    loop={true}
                >
                    <Text style={styles.loadingText}>Pulling up your records master</Text>
                </AnimatedLoader>
            </View>

        )}
        </View>
    );

}

const styles = StyleSheet.create({
    lottie:{
        width: 400,
        height: 400,
    },
    loadingText: {
        width: 300,
        color: 'white',
        fontWeight: 'bold',
        fontSize: SIZES.font,
        textAlign: "center"
    },
    wrapper: {
        width: '100%',
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        width: '90%',
        height: '88%',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default BusinessCard;