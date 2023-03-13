import * as Contacts from 'expo-contacts';
import {Contact} from '../common/types'

const saveContact = async (contactToSave?: Contact) => {

    //Works with IOS
    const {status} = await Contacts.requestPermissionsAsync();
    if (status === 'granted') {

        const contact = {
            [Contacts.Fields.FirstName]: contactToSave?.firstname,
            [Contacts.Fields.LastName]: contactToSave?.lastname,
            [Contacts.Fields.Company]: contactToSave?.company,
            [Contacts.Fields.ContactType]: contactToSave?.contactType,
            [Contacts.Fields.PhoneNumbers]: [{
                countryCode: "us",
                digits: "5555648583",
                label: "mobile",
                number: "(555) 564-8583"
            }, {
                countryCode: "us",
                digits: "4155553695",
                label: "main",
                number: "(415) 555-3695"
            }],
            [Contacts.Fields.Addresses]:
                [{
                    city: "Hillsborough",
                    country: "USA",
                    isoCountryCode: "us",
                    label: "work",
                    postalCode: "94010",
                    region: "CA",
                    street: "165 Davis Street"
                }],
            [Contacts.Fields.Emails]: [{
                email: "kate-bell@mac.com",
                label: "work"
            }]
        };

        //@ts-ignore
        const contactId = await Contacts.addContactAsync(contact);
        console.log(contactId)
        // const { data } = await Contacts.getContactsAsync({
        //     fields: [Contacts.Fields.Emails],
        // });
        //
        // if (data.length > 0) {
        //     const contact = data[0];
        //     console.log(contact)
        // }
        return contactId;
    }
}

export default saveContact