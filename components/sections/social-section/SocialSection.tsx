import React from "react"
import {View, Text, StyleSheet, TouchableOpacity, ListView, Dimensions, ScrollView} from "react-native";
import {
    FONTS,
    SIZES,
    COLORS,
    SHADOWS,
    MARGINS,
    CARD_HEIGHT,
    CARD_MIN_WIDTH,
    CARD_MAX_WIDTH
} from "../../../constants/theme";
import create = StyleSheet.create;
import Card from "../../common/Card";
import SocialBar from "./SocialBar";
import {List} from "react-native-paper";
import {FlatGrid} from "react-native-super-grid";
import socialBar from "./SocialBar";

interface Props {
    socialMedia: [{
        profileName?: string,
        profileUrL?: string
    }]
}

const SocialSection = (props: Props) => {

    return (
        <Card
            // minWidth={CARD_MIN_WIDTH.toString()}
            // maxWidth={CARD_MAX_WIDTH.toString()}
            color={'white'}
        >
            <ScrollView showsVerticalScrollIndicator={false} style={{height:'120%'}}>
                <View style={styles.wrapper}>
                    <View style={styles.container}>
                        <FlatGrid
                            contentContainerStyle={{
                                // width: 312,
                                marginVertical: 'auto',
                                overflow:'scroll'
                            }}
                            maxItemsPerRow={1}
                            data={props.socialMedia}
                            renderItem={({ item })=> {
                                return <SocialBar
                                    profileName={item.profileName}
                                    profileURL={item.profileUrL}
                                />
                            } } />
                    </View>
                </View>
            </ScrollView>

        </Card>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 313,
        height: '100%'
    },
    wrapper: {
        overflow: 'hidden',
    }
});

export default SocialSection