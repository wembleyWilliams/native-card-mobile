import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

interface Props {
    buttonColor: string,
    textColor: string,
    text: string,
    onClick?: ()=>void,
}

const Button = (props: Props) => {
    const styles = StyleSheet.create({
        container: {
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 20,  // Adjust vertical margin as needed
        },
        button: {
            backgroundColor: props.buttonColor,  // Light gray background color
            paddingVertical: 10,  // Adjust vertical padding for height
            paddingHorizontal: 20,  // Adjust horizontal padding for width
            borderRadius: 10,  // Rounded corners, adjust for your design
            width: '100%',
            shadowColor: '#000',  // Optional: Adds a shadow effect
            shadowOffset: { width: 0, height: 2 },  // Shadow direction
            shadowOpacity: 0.1,  // Shadow opacity
            shadowRadius: 2,  // Shadow blur
            elevation: 2,  // Android shadow
        },
        buttonText: {
            color: props.textColor,  // Text color
            fontSize: 16,  // Adjust font size as needed
            fontWeight: '500',  // Adjust font weight
            textAlign: 'center',
        },
    });
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={props.onClick}>
                <Text style={styles.buttonText}>{props.text}</Text>
            </TouchableOpacity>
        </View>
    );
};



export default Button;
