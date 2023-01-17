import React from "react"
import {View, Text, StyleSheet, TouchableOpacity, ListView} from "react-native";
import {FONTS, SIZES, COLORS, SHADOWS, MARGINS, CARD_HEIGHT} from "../../../constants/theme";
import create = StyleSheet.create;
import Card from "../../common/Card";
import SocialBar from "./SocialBar";
import {List} from "react-native-paper";
import {FlatGrid} from "react-native-super-grid";

const SocialSection = () => {

    return (
        <Card
            width={100}
            color={'white'}
            padding={-1}
        >
            <View style={styles.container}>
                <FlatGrid
                    maxItemsPerRow={1}
                    data={['1','2','3','4','5']} renderItem={()=>
                    <SocialBar />
                } />

            </View>

        </Card>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // flexDirection: "column",
        overflow: "scroll",
        width: '100%',
    },
});

export default SocialSection