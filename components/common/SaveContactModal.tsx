import * as React from "react"
import {useEffect, useState} from "react"
import {View, StyleSheet, Modal, Dimensions, Text, TouchableOpacity} from "react-native"
import {Contact} from "../../common/types";
import {Button, IconButton, MD2Colors, TextInput} from 'react-native-paper';
import {COLORS} from "../../constants/theme";
import saveContact from "../../utils/saveContact";
import {all} from "axios";

interface Props {
    open: any;
    handleClose: any;
    contact: Contact,
}

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const SaveContactModal = (props: Props) => {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [emails, setEmail] = useState([{}])
    const [company, setCompany] = useState('')
    const [addresses, setAddress] = useState([{}])
    const [phoneNumbers, setPhoneNumbers] = useState([{}])
    const [contactType, setContactType] = useState('')

useEffect(()=>{
    setFirstname(props.contact.firstname)
    setLastname(props.contact.lastname)
    setCompany(props.contact?.company as string)
    setEmail(props.contact?.emails as any)
    setAddress(props.contact?.addresses as any)
    setPhoneNumbers(props.contact?.phoneNumbers as any)
    setContactType(props.contact?.contactType as string)
},[])
    return (
        <View style={styles.centeredView}>
            <Modal
                visible={props.open}
                animationType={"slide"}
                transparent={true}
                onRequestClose={props.handleClose}
            >
                <View style={styles.wrapper}>
                    <View style={styles.container}>
                        <View style={styles.header}>
                            <IconButton style={styles.headerCloseIcon}
                                        icon="close"
                                        size={24}
                                        onPress={props.handleClose}
                                />
                        </View>
                        <View style={styles.body}>
                            <TextInput
                                style={styles.textInput}
                                label="Firstname"
                                placeholder={firstname}
                                value={firstname}
                                onChangeText={()=>setFirstname(firstname)}
                            />
                            <TextInput
                                style={styles.textInput}
                                label="Lastname"
                                placeholder={lastname}
                                value={lastname}
                                onChangeText={()=>setLastname(lastname)}
                            />
                            <TextInput
                                style={styles.textInput}
                                label="Company"
                                placeholder={company}
                                value={company}
                                onChangeText={()=>setCompany(company)}
                            />
                            {
                                phoneNumbers ?
                                phoneNumbers.map((phoneNumber,index)=>{
                                       return (
                                           <TextInput
                                               style={styles.textInput}
                                               label={`Phone Number ${index+1}`}
                                               placeholder={`${phoneNumber[index]?.number}`}
                                               value={`${phoneNumber[index]?.number}`}
                                               onChangeText={()=>setPhoneNumbers(phoneNumber[index]?.number)}
                                           />
                                       )
                                }) : null
                            }
                            {
                                emails ?
                                emails.map((email, index) => {
                                    return (
                                        <TextInput
                                            style={styles.textInput}
                                            label={`Email ${index+1}`}
                                            placeholder={`${email}`}
                                            value={`${email}`}
                                            onChangeText={()=>setEmail(email[index])}
                                            />
                                    )
                                }) : null
                            }
                            {
                                addresses ?
                                addresses.map((address, index) => {
                                    return (
                                        <TextInput
                                            style={styles.textInput}
                                            label={`Address ${index+1}`}
                                            placeholder={`${address}`}
                                            value={`${address}`}
                                            onChangeText={()=>setAddress(address[index])}
                                        />
                                    )
                                }) : null
                            }
                            <View style={styles.formControl}>
                                <Button
                                    style={styles.formButton}
                                    icon={"close"}
                                    onPress={props.handleClose}
                                >
                                    Cancel
                                </Button>

                                <Button
                                style={styles.formButton}
                                icon={"check-bold"}
                                onPress={
                                    ()=>saveContact({
                                            addresses: addresses,
                                            company: company,
                                            contactType: contactType,
                                            emails: emails,
                                            lastname: lastname,
                                            phoneNumbers: phoneNumbers,
                                            firstname: firstname
                                        })
                                        .then(r => console.log(r))
                                        .finally(props.handleClose)
                                }
                                >
                                    Confirm
                                </Button>


                            </View>
                        </View>

                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    formControl: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    formButton:{
        paddingTop: 40
    },
    headerCloseIcon: {
        flex: 2,
        margin: 'auto',
        marginHorizontal: '85%',
        marginVertical: 2,
    },
    header: {
        fontSize: 24,
        height: 40,
        flexDirection: 'row',
        justifyContent:'flex-end',
        alignItems:'flex-end',
        margin: 'auto',
    },
    textInput:{
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor:'transparent',
    },
    body: {
        paddingTop: 20,
        margin: 'auto',
        flexDirection: 'column'
    },
    modalText: {
        color: "#2c2c2c",
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    container: {
        height: windowHeight*0.8,
        borderRadius: 25,
        backgroundColor: 'ghostwhite',
        padding: 35
    },
    wrapper: {
        marginVertical:'50%',
        padding: 35,
        backgroundColor: "transparent",
    }
})

export default SaveContactModal