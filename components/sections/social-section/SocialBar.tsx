import React from "react"
import {View, StyleSheet, Text, Alert, Button, TouchableOpacity} from "react-native";
import {FONTS, SIZES, COLORS, SHADOWS, MARGINS, CARD_HEIGHT, PADDING} from "../../../constants/theme";
import create = StyleSheet.create;
import Card from "../../common/Card";
import {IconButton, } from "react-native-paper";
import * as WebBrowser from 'expo-web-browser';
import iconLoader from "../../../common/icon-loader";


interface Props {
    profileURL?: string,
    profileName?: string
}

const SocialBar = (props: Props) => {
    return (
        <>
            <View style={styles.wrapper}>
                <View style={styles.container}>
                    <IconButton
                        icon={iconLoader(props.profileURL as string)}
                        size={25}
                        iconColor={"#FFF"}
                        containerColor={"#FFF"}
                        disabled={true}
                    />

                    <Text style={styles.handle}>{props.profileName}</Text>
                    <TouchableOpacity
                        style={styles.linkButton}
                        onPress={()=> WebBrowser.openBrowserAsync(props.profileURL as string)}
                    >
                        <Text style={styles.linkButtonText}>Visit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#2c2c2c',
        borderRadius: 60,
        // padding: 2,
        // width: '100%'
    },

    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        // width: '90%'
    },
    handle: {
        color: '#FFF'
    },
    linkButtonText: {
        color: '#FFF',
        fontWeight:'bold',
    },
    linkButton : {
        // height: '60%',
        backgroundColor: COLORS.primary,
        borderRadius: 10,
        alignContent: "center",
        paddingHorizontal: PADDING.button,
        paddingVertical: PADDING.button
    }
})

export default SocialBar