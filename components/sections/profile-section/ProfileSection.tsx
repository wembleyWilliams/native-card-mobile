import React, {useState} from "react"
import {View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";
import { Avatar } from 'react-native-paper';
import AvatarPlaceholder  from '../../common/index';
import create = StyleSheet.create;

interface Props {
    image?: {
        data: string | undefined,
        mime: string | undefined
    }
}

const ProfileSection = (props: Props)  => {

    return (
      <View style={styles.container}>
          {
              props.image?
                  <Avatar.Image size={200} source={{uri: `data:${props.image?.mime};base64,${props.image?.data}`}}/>
              :
                  <Avatar.Image size={200} source={require('../../../assets/placeholders/avatar.png')} />
          }
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        maxHeight: 200,
        maxWidth:200,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 180,
        borderWidth: 1
    },
});

export default ProfileSection;
