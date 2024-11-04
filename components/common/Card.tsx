import React from 'react';
import {StyleSheet} from "react-native";
import {CARD_HEIGHT, COLORS, MARGINS} from "../../constants/theme";
import {Card} from "react-native-paper";

interface CardProps {
    height?: number,
    width?: number,
    color?: any,
    padding?: number,
    minWidth?: any,
    maxWidth?: any,
    margin?: any,
    children?: any;
}


const BaseCard = (props: CardProps) => {
    const styles = StyleSheet.create({
        container: {
            overflow:'hidden',
            marginHorizontal: 'auto',
            minWidth: props.minWidth?props.minWidth:'100%',
            maxWidth: props.maxWidth?props.maxWidth:'100%',
            height: props.height?props.height: CARD_HEIGHT,
            backgroundColor: props.color? props.color :COLORS.primary ,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 30,
            borderColor: 'red',
            margin: props.margin?props.margin:MARGINS.text,
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