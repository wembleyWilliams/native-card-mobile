import React from "react"
import {ScrollView, StyleSheet, View} from "react-native";
import Card from "../../common/Card";
import SocialBar from "./SocialBar";
import {FlatGrid} from "react-native-super-grid";

interface Props {
    socialMedia: [{
        profileName?: string,
        profileUrL?: string
    }]
}

const SocialSection = (props: Props) => {

    return (
        <Card
            color={'white'}
        >
            <ScrollView showsVerticalScrollIndicator={false} style={{height:'120%'}}>
                <View style={styles.wrapper}>
                    <View style={styles.container}>
                        <FlatGrid
                            contentContainerStyle={{
                                // width: 312,
                                marginVertical: 'auto',
                                overflow:'scroll'
                            }}
                            maxItemsPerRow={1}
                            data={props.socialMedia}
                            renderItem={({ item })=> {
                                return <SocialBar
                                    profileName={item.profileName}
                                    profileURL={item.profileUrL}
                                />
                            } } />
                    </View>
                </View>
            </ScrollView>

        </Card>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 313,
        height: '100%'
    },
    wrapper: {
        overflow: 'hidden',
    }
});

export default SocialSection