import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {COLORS, PADDING} from "../../constants/theme";

const PageNotFoundView = () => {

    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.titlefourofour}>
                        404
                    </Text>
                    <Text style={styles.titlebody}>
                        Card Not Found
                    </Text>
                </View>

                <Image
                    style={styles.image}
                    source={require('../../assets/placeholders/cards.png')}/>
                <Text style={styles.textBody}>
                    An error has occurred, sorry man
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image:{
        width: 200,
        height: 200
    },
    titlebody: {
        fontSize:40,
        fontWeight: "bold",
        color: '#fff',
        textAlign: 'center'
    },
    titlefourofour: {
        fontSize:120,
        fontWeight: "bold",
        color: '#fff',
        textAlign: 'center'
    },
    textBody: {
        fontSize:20,
        fontWeight: "bold",
        color: '#fff',
        textAlign: 'center'
    },
    wrapper: {
        width: '100%',
        flex: 1,
        backgroundColor: '#2c2c2c',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flexDirection:"column",
        width: '90%',
        height: '88%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    handle: {
        color: '#FFF'
    },
    linkButtonText: {
        color: '#FFF',
        fontWeight:'bold',
        margin:"auto"
    },
    linkButton : {
        height: '60%',
        backgroundColor: COLORS.primary,
        borderRadius: 50,
        alignContent: "center",
        paddingHorizontal: PADDING.button
    }
})




export default PageNotFoundView