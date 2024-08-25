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
    console.log(props)
    return (
        <>
            <View style={styles.wrapper}>
                <View style={styles.container}>
                    <IconButton
                        style={styles.icon}
                        icon={():any=> {console.log(props.profileURL as string); iconLoader(props.profileURL as string)}}
                        size={15}
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
        overflow: "hidden"
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 60,
    },
    icon: {
        maxWidth: 32
    },
    handle: {
        color: '#FFF',
        textWrap:'none',
        textOverflow: "ellipsis",
        maxWidth: 190
    },
    linkButtonText: {
        color: '#FFF',
        fontWeight:'bold',
    },
    linkButton : {
        overflow:'hidden',
        backgroundColor: COLORS.primary,
        borderRadius: 10,
        alignContent: "center",
        paddingHorizontal: PADDING.button,
        paddingVertical: PADDING.button,
        maxWidth: 75
    }
})

export default SocialBar