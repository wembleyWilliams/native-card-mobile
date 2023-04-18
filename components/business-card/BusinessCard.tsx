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
import AnimatedLoader from "react-native-animated-loader";
import {COLORS, FONTS, PADDING, SIZES} from "../../constants/theme";
import saveContact from "../../utils/saveContact";
import {Dimensions} from 'react-native';
import SaveContactModal from "../common/SaveContactModal";

const BusinessCard = ( ) => {
    const [loadingComplete, setLoadingComplete] = useState(false)
    const [errorPage, setErrorPage] = useState(false)
    const [isOpenSaveContactModal, setIsOpenSaveContactModal] = useState(false)

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
            fontSize: SIZES.font,
            textAlign: "center"
        },
        wrapper: {
            width: windowWidth,
            height: windowHeight,
            flex: 1,
            backgroundColor: 'transparent',
            alignItems: 'center',
            justifyContent: 'center',
        },
        container: {
            position: "absolute",
            height: windowHeight - (windowHeight*0.2),
            width: windowWidth - (windowWidth*0.2),
            alignItems: 'center',
            justifyContent: 'center',
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
        }
    });

    const openSaveContactModal = () => {
        setIsOpenSaveContactModal(true)
    }

    const closeSaveContactModal = () => {
        setIsOpenSaveContactModal(false)
    }

    useEffect(()=> {
        console.log("Retrieving business data")
            services
                .getBusiness()
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

    return (
        <View style={styles.wrapper}>
        { loadingComplete ? (
            <>
                <SaveContactModal
                    open={isOpenSaveContactModal}
                    contact={contact}
                    handleClose={closeSaveContactModal}/>

                <View style={styles.container}>
                    <ProfileSection image={{data: logo?.data, mime: logo?.mime}}/>
                    <Description
                        description={description ? description : 'No Description'}/>
                    <SocialSection socialMedia={socialMediaArray}/>

                    {/*TODO: replace with actual SAVE CONTACT interface*/}
                    <TouchableOpacity
                        style={styles.linkButton}
                        onPress={() => {
                            setIsOpenSaveContactModal(true)
                        }}
                    >
                        <Text style={styles.linkButtonText}>SAVE CONTACT</Text>
                    </TouchableOpacity>
                </View>


            </>

        ) : (
            !errorPage? (
                <View style={styles.container}>
                    {/*TODO: Replace loading screen with react-native-web compatible screen*/}
                    {/*<AnimatedLoader*/}
                    {/*    source={require("../../common/loader/card-loading-animation.json")}*/}
                    {/*    visible={!loadingComplete}*/}
                    {/*    overlayColor="rgba(255,255,255,0)"*/}
                    {/*    animationStyle={styles.lottie}*/}
                    {/*    speed={1.5}*/}
                    {/*    loop={true}*/}
                    {/*>*/}
                    {/*    <Text style={styles.loadingText}>Pulling up your records master</Text>*/}
                    {/*</AnimatedLoader>*/}
                </View>
            ):(
                <ErrorPage />
            )

        )}
        </View>
    );

}



export default BusinessCard;