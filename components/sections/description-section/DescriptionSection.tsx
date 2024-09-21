import React from "react"
import {Dimensions, StyleSheet, Text, View} from "react-native";
import {CARD_MIN_WIDTH, COLORS, SIZES} from "../../../constants/theme";
import Card from "../../common/Card";

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
                <View style={styles.container}>
                    <Text style={styles.title}>
                        Description
                    </Text>
                    <Text style={styles.description}>
                        {props.description}
                    </Text>
                </View>
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        // width: windowWidth - windowWidth*(0.30),
        width: CARD_MIN_WIDTH
    },
    container: {
        height: 300
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
        alignItems: 'center',
        alignContent: 'flex-start',
        textAlign: 'left'
    }
});

export default DescriptionSection