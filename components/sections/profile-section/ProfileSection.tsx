import React from "react"
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { Avatar } from 'react-native-paper';
import AvatarPlaceholder  from '../../common/index';
import create = StyleSheet.create;

interface Props {
    image?: any;
}

const ProfileSection = (props: Props)  => {

    return (
      <View style={styles.container}>
          {
              props.image?
                  null
                  // <Header image={`data:${logoMime};base64,${logoData}`}/>
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
