import React, {useEffect, useState} from "react"
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import create = StyleSheet.create;
import ProfileSection from "../sections/profile-section/ProfileSection";
import Description from "../sections/description-section/DescriptionSection";
import SocialSection from "../sections/social-section/SocialSection";
// import {useDispatch, useSelector} from "react-redux";
import {State} from "../../redux/reducers/index"
import services from "../../services";
import {setCardDetails} from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux";

interface Props {

}

const BusinessCard = (props: Props) => {
    const [loadingComplete, setLoadingComplete] = useState(false)
    const dispatch = useDispatch();
    const description = useSelector(
        (state: State) => state.application.business?.description
    )
    useEffect(()=> {
        console.log("Retrieving business data")
            services
                .getBusiness()
                .then((res)=>{
                    dispatch(setCardDetails(res))
                    setLoadingComplete(true)
                    res? console.log("Business Data retrieved successfully") : null
                })
                .catch((err)=>{
                    console.log(err)
                })
    },[])

    return (
        <View style={styles.wrapper}>
        { loadingComplete ? (

                <View style={styles.container}>
                    <ProfileSection />
                    <Description
                        description={description}
                    />
                    <SocialSection />
                </View>

        ) : (<View><Text>Placeholder</Text></View>)}
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