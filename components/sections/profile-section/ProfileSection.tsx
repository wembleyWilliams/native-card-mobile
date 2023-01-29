import React, {useState} from "react"
import {View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";
import { Avatar } from 'react-native-paper';
import AvatarPlaceholder  from '../../common/index';
import create = StyleSheet.create;

interface Props {
    image?: {
        data: string,
        mime: string
    }
}

const ProfileSection = (props: Props)  => {

    return (
      <View style={styles.container}>
          {
              props.image?
                  <Avatar.Image size={240} source={{uri: `data:${props.image?.mime};base64,${props.image?.data}`}}/>
              :
                  <Avatar.Image size={240} source={require('../../../assets/placeholders/avatar.png')} />
          }
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 250,
        height: 250,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 180,
        borderWidth: 1
    },
});

export default ProfileSection;
