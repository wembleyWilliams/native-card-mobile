import React from "react"
import {View, StyleSheet, Text, Alert, Button, TouchableOpacity} from "react-native";
import {FONTS, SIZES, COLORS, SHADOWS, MARGINS, CARD_HEIGHT, PADDING} from "../../../constants/theme";
import create = StyleSheet.create;
import Card from "../../common/Card";
import {IconButton} from "react-native-paper";
import * as WebBrowser from 'expo-web-browser';

interface Props {
    profileUrl: string,
    profileName: string
}

const SocialBar = (props: Props) => {

    return (
        <>
            <View style={styles.wrapper}>
                <View style={styles.container}>
                    <IconButton
                        icon={require('../../../assets/icons/Twitter.png')}
                        size={25}
                        onPress={()=>{console.log('working button...')}}
                    />
                    {/*<Button*/}
                    {/*    title={`${props.text}`}*/}
                    {/*    onPress={()=> console.log('simple press')}/>*/}

                        <Text style={styles.handle}>{props.profileName}</Text>
                    <TouchableOpacity
                        style={styles.linkButton}
                        onPress={()=> WebBrowser.openBrowserAsync(props.profileUrl)}
                    >
                        <Text style={styles.linkButtonText}>Twitter</Text>
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
        width: '90%'
    },
    handle: {
        color: '#FFF'
    },
    linkButtonText: {
        color: '#FFF',
        fontWeight:'bold',
        margin:"auto"
    },
    linkButton : {
        height: '60%',
        backgroundColor: COLORS.primary,
        borderRadius: 50,
        alignContent: "center",
        paddingHorizontal: PADDING.button
    }
})

export default SocialBar