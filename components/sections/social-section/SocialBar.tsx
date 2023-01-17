import React from "react"
import {View, StyleSheet, Text} from "react-native";
import {FONTS, SIZES, COLORS, SHADOWS, MARGINS, CARD_HEIGHT} from "../../../constants/theme";
import create = StyleSheet.create;
import Card from "../../common/Card";
import {IconButton} from "react-native-paper";

const SocialBar = () => {

    return (
        <>
            <View style={styles.wrapper}>
                <View style={styles.container}>
                    <IconButton
                        icon={require('../../../assets/icons/Twitter.png')}
                        size={25}
                        onPress={()=>{console.log('working button...')}}
                    />
                    <Text style={styles.linkText}>Link</Text>
                    <Text style={styles.handle}>@goodgraphicsja</Text>
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
        // textAlign: 'right'
    },
    linkText: {
        color: '#FFF'
        // textAlign: "auto"
    }
})

export default SocialBar