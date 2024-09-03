import React, {useEffect, useState} from "react"
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import ProfileSection from "../sections/profile-section/ProfileSection";
import Description from "../sections/description-section/DescriptionSection";
import SocialSection from "../sections/social-section/SocialSection";
import ErrorPage from "../../pages/404NotFound";
import {State} from "../../redux/reducers/index"
import services from "../../services";
import {setBusinessDetails} from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import {COLORS, FONTS, PADDING, SIZES} from "../../constants/theme";
import {Dimensions} from 'react-native';
import LottieView from "react-native-web-lottie";
import {useParams} from "react-router-dom";
import TemplateOne from "../../templates/template-one";
import TemplateTwo from "../../templates/template-two";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";

//TODO: Upgrade logs to a better indusrty standard log system, winston maybe?
const BusinessCard = () => {
    let {cardId} = useParams()
    const [loadingComplete, setLoadingComplete] = useState(false)
    const [errorPage, setErrorPage] = useState(false)
    const [isOpenSaveContactModal, setIsOpenSaveContactModal] = useState(false)
    const [template, setTemplate] = useState('template-1')
    let animRef = null;

    const dispatch = useDispatch();
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const _id = useSelector(
        (state: State) => state.application.application.BusinessData?._id
    )
    const description = useSelector(
        (state: State) => state.application.application.BusinessData?.description
    )
    const phone = useSelector(
        (state: State) => state.application.application.BusinessData?.phone
    )

    const industry = useSelector(
        (state: State) => state.application.application.BusinessData?.industry
    )

    const logo = useSelector(
        (state: State) => state.application.application.BusinessData?.logo
    )

    const businessHandles = useSelector(
        (state: State) => state.application.application.BusinessData?.businessHandles
    )

    const contact = useSelector(
        (state: State) => state.application.application.BusinessData?.contact
    )

    const name = useSelector(
        (state: State) => state.application.application.BusinessData?.name
    )

    const address = useSelector(
        (state: State) => state.application.application.BusinessData?.address
    )

    const email = useSelector(
        (state: State) => state.application.application.BusinessData?.contactEmail
    )

    const styles = StyleSheet.create({
        lottie: {
            width: 400,
            height: 400,
        },
        loadingText: {
            width: 300,
            color: 'white',
            fontWeight: 'bold',
            fontSize: SIZES.medium,
            textAlign: "center",

        },
        wrapper: {
            width: windowWidth,
            height: windowHeight,
            margin: 'auto',
            flex: 1,
            backgroundColor: 'transparent',
            alignItems: 'center',
            justifyContent: 'center',
        },
        container: {
            position: "absolute",
            height: windowHeight - (windowHeight * 0.2),
            width: windowWidth > 320 ? windowWidth - (windowWidth * 0.2) : 320,
            margin: 'auto',
            alignItems: 'center',
            justifyContent: 'space-around',

        },
        // New styles for the button
        buttonContainer: {
            position: 'absolute',
            top: '1%',
            right: '90%',
            zIndex: 3,
        },
        button: {
            width: 25,
            height: 25,
            borderRadius: 25,
            backgroundColor: COLORS.secondary,
            alignItems: 'center',
            justifyContent: 'center',
        },
        buttonIcon: {
            color: 'white',
            fontSize: 16,
        },
        loadingAnim: {
            // marginTop: -16
        }
    });

    useEffect(() => {
        console.log("Retrieving business data")
        services
            .getBusiness(cardId)
            .then((res) => {
                if (res) {
                    dispatch(setBusinessDetails(res))
                    setLoadingComplete(true)
                    console.log("Business Data retrieved successfully");
                } else if (!res) {
                    setLoadingComplete(false)
                    setErrorPage(true)
                    console.log('No network data retrieved')
                }
            })
            .catch((err) => {
                console.log(err)
            })

        console.log("Retrieving user data")
    }, [])

    useEffect(() => {
        // @ts-ignore
        animRef.play();
    }, [])

    const renderTemplate = () => {
        switch(template) {
            case 'template-1':
                return (
                    <TemplateOne
                        _id={_id}
                        logo={logo}
                        name={name}
                        phone={phone}
                        industry={industry}
                        description={description}
                        contact={contact}
                        address={address}
                        pointOfContact={'placeholder'}
                        contactEmail={email}
                        businessHandles={businessHandles}
                    />
                );
            case 'template-2':
                return (
                    <TemplateTwo
                        _id={_id}
                        logo={logo}
                        phone={phone}
                        industry={industry}
                        name={name}
                        description={description}
                        contact={contact}
                        address={address}
                        pointOfContact={'placeholder'}
                        contactEmail={email}
                        businessHandles={businessHandles}
                    />
                );
            default:
                return <TemplateOne
                    _id={_id}
                    logo={logo}
                    name={name}
                    phone={phone}
                    industry={industry}
                    description={description}
                    contact={contact} address={address}
                    pointOfContact={'placeholder'} contactEmail={email}
                    businessHandles={businessHandles}
                />;
        }
    };

    const toggleTemplate = () => {
        setTemplate(prevTemplate => prevTemplate === 'template-1' ? 'template-2' : 'template-1');
    };

    return (
        <View style={styles.wrapper}>
            {loadingComplete ? (
                <>
                    {template?
                        (
                            <>
                                {renderTemplate()}
                                <View style={styles.buttonContainer}>
                                    <TouchableOpacity style={styles.button} onPress={toggleTemplate}>
                                        <FontAwesomeIcon icon={faSyncAlt} style={styles.buttonIcon} />
                                    </TouchableOpacity>
                                </View>
                            </>

                        )
                        :
                        (
                            <TemplateOne
                                _id={_id}
                                logo={logo}
                                name={name}
                                phone={phone}
                                industry={industry}
                                description={description}
                                contact={contact}
                                address={address}
                                pointOfContact={'placeholder'}
                                contactEmail={email}
                                businessHandles={businessHandles}
                            />
                        )
                    }
                </>
            ) : (
                !errorPage ? (
                    <View style={styles.container}>
                        <LottieView
                            style={[styles.loadingAnim, {zIndex: 1}]}
                            ref={(ref: any) => {
                                animRef = ref;
                            }}
                            source={require("../../common/loader/card-loading-animation.json")}
                            autoPlay={false}
                            loop={true}
                            speed={1.5}
                        />
                        <Text style={[styles.loadingText, {zIndex: 2, marginTop: -300}]}>Fetching your data</Text>
                    </View>
                ) : (
                    <ErrorPage/>
                )

            )}
        </View>
    );

}


export default BusinessCard;