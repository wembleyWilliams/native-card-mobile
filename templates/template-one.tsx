import React from 'react';
import {Dimensions, StyleSheet, View, Text, ScrollView, TouchableOpacity} from "react-native";
import {Avatar, IconButton} from "react-native-paper";
import {COLORS, SIZES} from "../constants/theme";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt, faShareAlt} from '@fortawesome/free-solid-svg-icons'; // Import Share icon
import {BusinessData} from "../common/types";
import iconLoader from "../common/icon-loader";
import Button from "../components/common/Button";
import * as WebBrowser from "expo-web-browser";
import services from "../services";

const windowWidth = Dimensions.get('window').width;

const TemplateOne = (businessData: BusinessData) => {
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
                const vcfData = res.data;
                const blob = new Blob([vcfData], { type: 'text/vcard' });
                const url = URL.createObjectURL(blob);

                // Create a temporary anchor element to download the file
                const a = document.createElement('a');
                a.href = url;
                a.download = 'contact.vcf';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url); // Clean up the URL object

                console.log('VCF file downloaded');
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const styles = StyleSheet.create({
        wrapper: {
            flex: 1,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f0f0f0',
            borderRadius: 20,
        },
        container: {
            width: '100%',
            height: 'auto',
            alignItems: 'center',
            padding: 10,
            justifyContent: 'space-between',
        },
        profileSection: {
            paddingTop: 20,
            paddingBottom: 30,
            borderBottomWidth: 3,
            borderBottomColor: COLORS.secondary,
            borderBottomEndRadius: 7,
            borderBottomStartRadius: 7,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: '100%',
        },
        avatarContainer: {
            marginRight: 20,
            borderWidth: 4,
            borderColor: COLORS.secondary,
            borderRadius: 60
        },
        textContainer: {
            flexShrink: 1,
        },
        addressTextContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
            borderRadius: 10,
            backgroundColor: COLORS.secondary,
            maxWidth: windowWidth * 0.8,
        },
        addressText: {
            color: '#fff',
            marginLeft: 10,
            flexShrink: 1,
        },
        nameText: {
            fontSize: SIZES.medium,
            fontWeight: "bold",
            textTransform: 'uppercase',
            marginBottom: 5,
        },
        contactText: {
            marginBottom: 5,
        },
        section: {
            paddingTop: 15,
            paddingBottom: 15,
            width: "100%",
        },
        sectionBorder: {
            borderBottomWidth: 3,
            borderBottomColor: COLORS.secondary,
            borderBottomEndRadius: 7,
            borderBottomStartRadius: 7,
        },
        sectionText: {
            paddingTop: 14
        },
        sectionTitle: {
            marginTop: 10,
            textTransform: 'uppercase',
            flexDirection: 'row',
            flexShrink: 1,
            fontSize: SIZES.small,
            fontWeight: 'bold',
            backgroundColor: COLORS.secondary,
            borderRadius: 20,
            padding: 14,
            justifyContent: 'space-between',
        },
        icon: {},
        socialContainer: {
            width: "100%",
            justifyContent: 'space-around',
            paddingVertical: 5,
            paddingHorizontal: 10,
        },
        item: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        text: {
            fontSize: 16,
            color: '#4A4A4A',
            textAlign: "left"
        },
        // New styles for "Get Contact" button
        shareButtonWrapper: {
            paddingRight: 20,
            paddingLeft: 20,
            alignItems: 'center',
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        shareButtonContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            marginTop: 10,
        },
        shareButtonIcon: {
            backgroundColor: COLORS.secondary,
            padding: 10,
            borderRadius: 50, // Makes the button round
            alignItems: 'center',
            justifyContent: 'center',
        },
        shareButtonText: {
            color: COLORS.secondary,
            textAlign: 'center',
            marginTop: 5,
            fontSize: SIZES.small,
            fontWeight: 'bold',
            textTransform: 'uppercase',
        }
    });

    return (
        <View style={styles.wrapper}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.profileSection}>
                    <View style={styles.avatarContainer}>
                        {businessData.logo ? (
                            <Avatar.Image
                                size={100}
                                source={{uri: `data:${businessData.logo?.mime};base64,${businessData.logo?.data}`}}
                            />
                        ) : (
                            <Avatar.Image
                                size={100}
                                source={require('../assets/placeholders/avatar.png')}
                            />
                        )}
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.nameText}>Wembley Williams</Text>
                        <Text style={styles.contactText}>{businessData.phone}</Text>
                        <Text style={styles.contactText}>{businessData.contactEmail}</Text>
                        <View style={styles.addressTextContainer}>
                            <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" color="#fff"/>
                            <Text style={styles.addressText}>
                                {businessData.address.city}, {businessData.address.state}, {businessData.address.country}, {businessData.address.postalCode}
                            </Text>
                        </View>
                    </View>
                </View>

                {/* Other sections */}
                <View style={[styles.section, styles.sectionBorder]}>
                    <View style={[styles.section, {paddingBottom: 20}]}>


                        {/* New Share button */}
                        <View style={styles.shareButtonWrapper}>
                            <Text style={{
                                fontSize: SIZES.medium,
                                fontWeight: 'bold',
                                textAlign: 'center'
                            }}>{businessData.name}</Text>
                            <View style={styles.shareButtonContainer}>
                                <TouchableOpacity style={styles.shareButtonIcon}
                                                  onPress={handleClick}>
                                    <FontAwesomeIcon icon={faShareAlt} size={"1x"} color="#fff"/>
                                </TouchableOpacity>
                                <Text style={styles.shareButtonText}>Save Contact</Text>
                            </View>
                        </View>

                    </View>
                    <View style={styles.sectionTitle}>
                        <Text style={{color: '#FFF', fontWeight: 'bold'}}>About US</Text>
                        <Text style={{color: '#FFF'}}>Influencer</Text>
                    </View>
                    <Text style={styles.sectionText}>
                        {businessData.description}
                    </Text>
                </View>

                <View style={styles.section}>
                    <View style={styles.sectionTitle}>
                        <Text style={{color: '#FFF', fontWeight: 'bold'}}>Platforms</Text>
                        <Text style={{color: '#FFF'}}>Links</Text>
                    </View>
                    <View style={styles.socialContainer}>
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
                                        size={24}
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
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default TemplateOne;
