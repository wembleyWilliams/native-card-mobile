import React from 'react';
import {BusinessData} from "../common/types";
import {Dimensions, StyleSheet, View, Text, ScrollView} from "react-native";

import {COLORS, FONTS, PADDING, SIZES} from "../constants/theme";
import {Avatar, IconButton} from "react-native-paper";
import * as WebBrowser from "expo-web-browser";
import Button from "../components/common/Button";
import iconLoader from "../common/icon-loader";
import services from "../services";

//
// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

const TemplateTwo = (businessData: BusinessData) => {

    const sampleVCard = {
        uid: "123456",
        birthday: "1980-10-15",
        cellPhone: "+1234567890",
        pagerPhone: "+0987654321",
        email: "john.doe@example.com",
        workEmail: "john.work@example.com",
        firstName: "John",
        formattedName: "John Doe",
        gender: "male",
        homeAddress: {
            label: "Home",
            street: "123 Main St",
            city: "Hometown",
            stateProvince: "CA",
            postalCode: "90210",
            countryRegion: "USA"
        },
        homePhone: "+1122334455",
        homeFax: "+5566778899",
        lastName: "Doe",
        logo: {
            url: "https://example.com/logo.png",
            mediaType: "image/png",
            base64: false
        },
        middleName: "E",
        namePrefix: "Mr.",
        nameSuffix: "Jr.",
        nickname: "Johnny",
        note: "Test note for vCard",
        organization: "ACME Corporation",
        photo: {
            url: "https://example.com/photo.jpg",
            mediaType: "image/jpeg",
            base64: false
        },
        role: "Software Engineer",
        socialUrls: {
            facebook: "https://facebook.com/johndoe",
            linkedIn: "https://linkedin.com/in/johndoe",
            twitter: "https://twitter.com/johndoe",
            flickr: "https://flickr.com/photos/johndoe"
        },
        source: "https://source.example.com",
        title: "Lead Developer",
        url: "https://johndoe.com",
        workUrl: "https://johndoe.work",
        workAddress: {
            label: "Work",
            street: "456 Corporate Blvd",
            city: "Metropolis",
            stateProvince: "NY",
            postalCode: "10001",
            countryRegion: "USA"
        },
        workPhone: "+12123334444",
        workFax: "+12123335555",
        version: "3.0"
    };


    const handleClick = () => {

        services
            .getContactCard(sampleVCard)
            .then((res) => {
                // const vcfData = res;
                // Create a Blob object for the vCard data
                const blob = new Blob([res], { type: 'text/vcard' });
                const url = URL.createObjectURL(blob);

                // Trigger the download in a mobile-friendly way
                const a = document.createElement('a');
                a.href = url;
                a.download = 'contact.vcf';
                a.style.display = 'none'; // Hide the anchor element
                document.body.appendChild(a);
                a.click(); // Trigger the download
                document.body.removeChild(a);

                URL.revokeObjectURL(url); // Clean up

                console.log('VCF file downloaded');
            })
            .catch((err) => {
                console.log('Error downloading VCF file:', err);
            });
    }

    const styles = StyleSheet.create({
        wrapper: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f0f0f0',
            borderRadius: 20
        },
        container: {
            width: '100%',
            height: '100%',
            alignItems: 'center',
            padding: 20
        },
        item: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            // paddingVertical: 5,  // Adjusted vertical padding
            // marginBottom: 5, // Reduced the gap between items
        },
        text: {
            fontSize: 16,
            color: '#4A4A4A',
            textAlign: "left"
        },
        linkButtonText: {
            color: '#FFF',
            fontWeight: 'bold',
            margin: "auto"
        },
        linkButton: {
            height: 'auto',
            backgroundColor: COLORS.primary,
            borderRadius: 50,
            alignContent: "center",
            paddingHorizontal: PADDING.button
        },
        profileSectionContainer: {
            width: '100%',
            justifyContent: 'space-between',
        },
        profileSectionText: {
            textAlign: "center",
            fontSize: SIZES.medium
        },
        profileSectionTextBold: {
            textAlign: "center",
            fontWeight: "bold"
        },
        descriptionContainer: {},
        socialWrapper: {
            paddingTop: 10,
            width: "100%"
        },
        socialContainer: {
            justifyContent: 'space-around',
            paddingVertical: 5,  // Reduced vertical padding
            paddingHorizontal: 10, // Added padding for better spacing
        },
        title: {
            fontSize: SIZES.extraLarge,
            textAlign: 'left'
        },
        heading: {
            fontSize: SIZES.font,
            textAlign: 'left',
            fontWeight: 'bold'
        },
        logo: {
            alignSelf: "center",
            paddingBottom: 10
        },
        description: {
            paddingTop: 8,
            fontSize: SIZES.font,
            alignItems: 'center',
            textAlign: 'left'
        },
        addContactButton: {
            width: 20
        },
        icon: {}
    });

    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>

                {/*Profile Section*/}
                <View style={styles.profileSectionContainer}>
                    <View>
                        <Text style={styles.profileSectionTextBold}>{businessData.name}</Text>
                    </View>
                    <View style={{padding: 15}}>
                        {
                            businessData.logo ?
                                <Avatar.Image
                                    style={styles.logo}
                                    size={100}
                                    source={{uri: `data:${businessData.logo?.mime};base64,${businessData.logo?.data}`}}/>
                                :
                                <Avatar.Image
                                    style={styles.logo}
                                    size={100} source={require('../assets/placeholders/avatar.png')}/>
                        }
                    </View>
                    <View style={{justifyContent: 'space-between'}}>
                        <Text style={[styles.profileSectionTextBold, {paddingBottom: 5}]}>Wembley Williams</Text>
                        <Text style={[styles.profileSectionText, {
                            fontSize: SIZES.small,
                        }]}>
                            {businessData.contactEmail}
                            <br/>
                            {businessData.address.city}, {businessData.address.state}, {businessData.address.country}, {businessData.address.postalCode}
                        </Text>
                    </View>
                    <Button
                        onClick={()=>handleClick()}
                        buttonColor={'#F5F7FA'} text={'Add to Contacts'} textColor={'#7E848C'}/>
                </View>

                {/*Description Section*/}
                <View style={styles.descriptionContainer}>
                    <View>
                        <Text style={styles.heading}>About Me</Text>
                        <Text style={styles.description}>
                            I'm a product manager at Amazon. I love building products that
                            customers love. I also enjoy giving back to the community.
                        </Text>
                    </View>
                </View>

                {/*Social Section*/}
                <View style={styles.socialWrapper}>
                    <Text style={styles.heading}>Socials</Text>
                    <ScrollView contentContainerStyle={styles.socialContainer}>
                        {businessData.businessHandles.map((item, index) => (
                            <View
                                key={index}
                                style={styles.item}>

                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    gap: 15
                                }}>

                                    <IconButton
                                        style={styles.icon}
                                        icon={() => iconLoader(item.socialMedia)}
                                        size={15}
                                        iconColor={"#FFF"}
                                        containerColor={"#FFF"}
                                        disabled={true}
                                    />
                                    <Text style={styles.text}>{item.profileName}</Text>

                                </View>

                                <Button
                                    onClick={() => WebBrowser.openBrowserAsync(item.profileUrL as string)}
                                    buttonColor={'#F5F7FA'} text={'Visit'} textColor={'#7E848C'}/>
                            </View>
                        ))}
                    </ScrollView>
                </View>
            </View>
        </View>
    );
}

export default TemplateTwo;
