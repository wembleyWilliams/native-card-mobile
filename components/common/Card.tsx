import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import create = StyleSheet.create;
import {CARD_HEIGHT, COLORS, MARGINS} from "../../constants/theme";
import {Card} from "react-native-paper";

interface CardProps {
    height?: number,
    width?: number,
    color?: any,
    padding?: number,

    children?: any;
}


const BaseCard = (props: CardProps) => {
    const styles = StyleSheet.create({
        container: {
            marginHorizontal: 'auto',
            minWidth: '100%',
            height: props.height?props.height: CARD_HEIGHT,
            backgroundColor: props.color? props.color :COLORS.primary ,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 30,
            borderColor: 'red',
            margin: MARGINS.text,
            padding: props.padding?props.padding : 20
        },
    });

    return (
        <Card style={styles.container}>
            {props.children}
        </Card>
    );
};



export default BaseCard;