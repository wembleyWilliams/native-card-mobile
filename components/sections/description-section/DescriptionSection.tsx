import React from "react"
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {FONTS, SIZES, COLORS, SHADOWS, MARGINS, CARD_HEIGHT, CARD_MAX_WIDTH, CARD_MIN_WIDTH} from "../../../constants/theme";
import create = StyleSheet.create;
import Card from "../../common/Card";
import {Dimensions} from 'react-native';

interface Props {
    description?: string
}
const windowWidth = Dimensions.get('window').width;

const DescriptionSection = (props: Props) => {

    return (
        <Card
            color={COLORS.secondary}
            // minWidth={CARD_MIN_WIDTH.toString()}
            // maxWidth={CARD_MAX_WIDTH.toString()}
        >
            <View style={styles.wrapper}>
                <Text style={styles.title}>
                    Description
                </Text>
                <Text style={styles.description}>
                    {props.description}
                </Text>
            </View>

        </Card>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        width: windowWidth - windowWidth*(0.30),
    },
    title: {
        color: '#FFF',
        fontSize: SIZES.extraLarge,
        textAlign: 'center'
    },
    description: {
        paddingTop: 20,
        color: '#FFF',
        fontSize: SIZES.font,
        alignItems:'center',
        alignContent:'flex-start',
        textAlign: 'left'
    }
});

export default DescriptionSection