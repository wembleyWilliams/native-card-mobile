import * as Contacts from 'react-native-contacts';
import {Contact} from '../common/types'

const saveContact = async (contactToSave?: { emails: {}[]; addresses: {}[]; firstname: string; company: string; contactType: string; phoneNumbers: {}[]; lastname: string }) => {

    //Works with IOS
    const status = await Contacts.requestPermission();
    if (status === 'authorized') {

        // const contact = {
        //     [Contacts]
        //     [Contacts.Fields.FirstName]: contactToSave?.firstname,
        //     [Contacts.Fields.LastName]: contactToSave?.lastname,
        //     [Contacts.Fields.Company]: contactToSave?.company,
        //     [Contacts.Fields.ContactType]: contactToSave?.contactType,
        //     [Contacts.Fields.PhoneNumbers]: [{
        //         countryCode: "us",
        //         digits: "5555648583",
        //         label: "mobile",
        //         number: "(555) 564-8583"
        //     }, {
        //         countryCode: "us",
        //         digits: "4155553695",
        //         label: "main",
        //         number: "(415) 555-3695"
        //     }],
        //     [Contacts.Fields.Addresses]:
        //         [{
        //             city: "Hillsborough",
        //             country: "USA",
        //             isoCountryCode: "us",
        //             label: "work",
        //             postalCode: "94010",
        //             region: "CA",
        //             street: "165 Davis Street"
        //         }],
        //     [Contacts.Fields.Emails]: [{
        //         email: "kate-bell@mac.com",
        //         label: "work"
        //     }]
        // };
const contact  = {
    recordID: '6b2237ee0df85980',
    backTitle: '',
    company: '',
    emailAddresses: [{
        label: 'work',
        email: 'carl-jung@example.com',
    }],
    familyName: 'Jung',
    givenName: 'Carl',
    middleName: '',
    jobTitle: '',
    phoneNumbers: [{
        label: 'mobile',
        number: '(555) 555-5555',
    }],
    hasThumbnail: true,
    thumbnailPath: 'content://com.android.contacts/display_photo/3',
    postalAddresses: [{
        label: 'home',
        formattedAddress: '',
        street: '123 Fake Street',
        pobox: '',
        neighborhood: '',
        city: 'Sample City',
        region: 'CA',
        state: 'CA',
        postCode: '90210',
        country: 'USA',
    }],
    prefix: 'MR',
    suffix: '',
    department: '',
    birthday: {'year': 1988, 'month': 1, 'day': 1 },
    imAddresses: [
        { username: '0123456789', service: 'ICQ'},
        { username: 'johndoe123', service: 'Facebook'}
    ],
    isStarred: false,
}
        const contactId = await Contacts.openContactForm(contact)
        //@ts-ignore
        // const contactId = await Contacts.addContactAsync(contact);
        // console.log(contactId)
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