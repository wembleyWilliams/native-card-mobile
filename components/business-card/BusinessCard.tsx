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

        ) : (<View><Text>APP is loading.. Placeholder</Text></View>)}
        </View>
    );

}

const styles = StyleSheet.create({
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