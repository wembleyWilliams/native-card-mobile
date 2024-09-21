import React from "react"
import {StyleSheet, View} from "react-native";
import {Avatar} from 'react-native-paper';
import Card from "../../common/Card";

interface Props {
    image?: {
        data: string | undefined,
        mime: string | undefined
    }
}

const ProfileSection = (props: Props) => {

    return (
        <>
            <View style={styles.container}>
                {
                    props.image ?
                        <Avatar.Image size={300}
                                      source={{uri: `data:${props.image?.mime};base64,${props.image?.data}`}}/>
                        :
                        <Avatar.Image size={300} source={require('../../../assets/placeholders/avatar.png')}/>
                }
            </View>
            <Card>

            </Card>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        maxHeight: 200,
        maxWidth: 200,
        alignItems: 'center',
        justifyContent: 'center',
        // borderRadius: 180,
        borderWidth: 0,
        borderColor: 'none',
        backgroundSize: 'cover',
        backgroundColor: "transparent"
    },
});

export default ProfileSection;
