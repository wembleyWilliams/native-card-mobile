import React from "react"
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {FONTS, SIZES, COLORS, SHADOWS, MARGINS, CARD_HEIGHT} from "../../../constants/theme";
import create = StyleSheet.create;
import Card from "../../common/Card";

interface Props {
    description?: string
}

const DescriptionSection = (props: Props) => {


    return (
        <Card color={COLORS.secondary}>
            <Text style={styles.title}>Description</Text>
            <Text style={styles.description}>
                {props.description}
                </Text>
        </Card>
    )
}

const styles = StyleSheet.create({

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