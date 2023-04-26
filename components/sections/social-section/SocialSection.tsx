import React from "react"
import {View, Text, StyleSheet, TouchableOpacity, ListView, Dimensions} from "react-native";
import {FONTS, SIZES, COLORS, SHADOWS, MARGINS, CARD_HEIGHT} from "../../../constants/theme";
import create = StyleSheet.create;
import Card from "../../common/Card";
import SocialBar from "./SocialBar";
import {List} from "react-native-paper";
import {FlatGrid} from "react-native-super-grid";
import socialBar from "./SocialBar";

interface Props {
    socialMedia: [{
        profileName?: string,
        profileURL?: string
    }]
}

const SocialSection = (props: Props) => {

    return (
        <Card
            minWidth={'312px'}
            color={'white'}
            padding={-1}
        >
            <View style={styles.container}>
                <FlatGrid
                    contentContainerStyle={{
                        width: 312,
                        marginVertical: 'auto',
                }}
                    maxItemsPerRow={1}
                    data={props.socialMedia}
                    renderItem={({ item })=> {
                            return <SocialBar
                                profileName={item.profileName}
                                profileURL={item.profileURL}
                            />
                    } } />
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    container: {
        overflow: "scroll",
    },
});

export default SocialSection