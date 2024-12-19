import React, {useEffect, useState} from "react"
import {Dimensions, StyleSheet, View} from "react-native";
import ErrorPage from "../../pages/404NotFound";
import {State} from "../../redux/reducers"
import services from "../../services";
import {setCardDetails} from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import {COLORS, SIZES} from "../../constants/theme";
import LottieView from "react-native-web-lottie";
import {useParams} from "react-router-dom";
import TemplateOne from "../../templates/template-one";
import TemplateTwo from "../../templates/template-two";

//TODO: Upgrade logs to a better industry standard log system, winston maybe?
const BusinessCard = () => {
    const {cardId} = useParams();
    const [loadingComplete, setLoadingComplete] = useState(false)
    const [didSubmit, setDidSubmit] = useState(false)
    const [errorPage, setErrorPage] = useState(false)
    // const [isOpenSaveContactModal, setIsOpenSaveContactModal] = useState(false)
    const [template, setTemplate] = useState('template-1')
    let animRef = null;

    const dispatch = useDispatch();
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const _id = useSelector(
        (state: State) => state.application.application.cardData?.businessData?._id
    )
    const description = useSelector(
        (state: State) => state.application.application.cardData?.businessData?.description
    )
    const phone = useSelector(
        (state: State) => state.application.application.cardData?.businessData?.phone
    )

    const industry = useSelector(
        (state: State) => state.application.application.cardData?.businessData?.industry
    )

    const logo = useSelector(
        (state: State) => state.application.application.cardData?.businessData?.logo
    )

    const socials = useSelector(
        (state: State) => state.application.application.cardData?.socialsData
    )

    const name = useSelector(
        (state: State) => state.application.application.cardData?.businessData?.name
    )

    const address = useSelector(
        (state: State) => state.application.application.cardData?.businessData?.address
    )

    const email = useSelector(
        (state: State) => state.application.application.cardData?.businessData?.contactEmail
    )

    const firstName = useSelector(
        (state: State) => state.application.application.cardData?.userData?.firstName
    )

    const lastName = useSelector(
        (state: State) => state.application.application.cardData?.userData?.lastName
    )

    const businessServices = useSelector(
        (state: State) => state.application.application.cardData?.businessData?.services
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
            display: "flex",
            width: windowWidth,
            height: windowHeight,
            margin: 'auto',
            backgroundColor: 'transparent',
            alignItems: 'center',
            justifyContent: 'center',
        },
        container:{
            height: "100%",
            maxWidth: 428,
            margin: 0,
        },
        loadingAnimationContainer: {
            height: windowHeight - (windowHeight * 0.2),
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
        const fetchData = async () => {
            try {
                const cardData = await services.getCardData(cardId);
                !didSubmit?
                    (
                       await services.submitMetricData(cardId)
                    ): setDidSubmit(false)
                let flatData = cardData[0]

                if (cardData) {
                    dispatch(setCardDetails(flatData));
                    setLoadingComplete(true);
                } else {
                    setLoadingComplete(false);
                    setErrorPage(true);
                }
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, []);


    useEffect(() => {
        // @ts-ignore
        animRef.play();
    }, [])

    const renderTemplate = () => {
        switch(template) {
            case 'template-1':
                return (
                    <TemplateOne
                        userName={`${firstName} ${lastName}`}
                        _id={cardId}
                        logo={logo}
                        name={name}
                        phone={phone}
                        industry={industry}
                        description={description}
                        address={address}
                        contactEmail={email}
                        socialsData={socials}
                        businessServices={businessServices}
                    />
                );
            case 'template-2':
                return (
                    <TemplateTwo
                        _id={cardId}
                        logo={logo}
                        phone={phone}
                        industry={industry}
                        name={name}
                        description={description}
                        address={address}
                        contactEmail={email}
                        socials={socials}
                    />
                );
            default:
                return <TemplateOne
                    _id={_id}
                    logo={logo}
                    name={name}
                    phone={phone}
                    industry={industry}
                    description={description} address={address} contactEmail={email}
                    socials={socials}
                />;
        }
    };

    // const toggleTemplate = () => {
    //     setTemplate(prevTemplate => prevTemplate === 'template-1' ? 'template-2' : 'template-1');
    // };

    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
            {loadingComplete ? (
                <>
                    {template?
                        (
                            <>
                                {renderTemplate()}
                                {/*<View style={styles.buttonContainer}>*/}
                                {/*    <TouchableOpacity style={styles.button} onPress={toggleTemplate}>*/}
                                {/*        <FontAwesomeIcon icon={faSyncAlt} style={styles.buttonIcon} />*/}
                                {/*    </TouchableOpacity>*/}
                                {/*</View>*/}
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
                                address={address}
                                contactEmail={email}
                                socials={socials}
                                // userId={userId}
                            />
                        )
                    }
                </>
            ) : (
                !errorPage ? (

                    <View style={styles.loadingAnimationContainer}>
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
                        {/*<Text style={[styles.loadingText, {zIndex: 2, marginTop: -300}]}>Fetching your data</Text>*/}
                    </View>
                ) : (
                    <ErrorPage/>
                )

            )}
            </View>
        </View>
    );

}


export default BusinessCard;