import React from "react"
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import create = StyleSheet.create;
import ProfileSection from "../sections/profile-section/ProfileSection";
import Description from "../sections/description-section/DescriptionSection";
import SocialSection from "../sections/social-section/SocialSection";

interface Props {

}

const BusinessCard = (props: Props) => {

    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <ProfileSection />
                <Description
                    description={
                        "Lorem ipsum dolor sit amet," +
                        "consectetur adipiscing elit." +
                        "Aenean rhoncus nulla at dolor" +
                        "volutpat, id suscipit arcu molestie. Integer eget leo eget" +
                        "purus iaculis placerat sed sed libero. Maecen"
                        }
                />
                <SocialSection />
            </View>
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