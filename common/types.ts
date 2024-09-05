export interface BusinessData {
    industry: string;
    phone: string;
    _id: string,
    logo?: { data?: string | undefined, mime?: string | undefined },
    name: string,
    description: string,
    //TODO: contact needs to be concurrent with IOS|Android Contact
    contact: Contact,
    address: {
        street: string,
        city: string,
        state: string,
        postalCode?: string,
        country: string
    },
    pointOfContact: string,
    contactEmail: string,
    businessHandles: [{
        socialMedia: string,
        profileName: string,
        profileUrL: string,
    }]
}

export interface UserData {
    _id: string,
    firstname: string,
    lastname: string,
    email: string,
    businessId?: string[],
    password: string,
    profilePicture?: { data: string, mime: string }
}

export interface ApplicationState {
    application: { UserData: UserData, BusinessData: BusinessData }
}

export interface Contact {
    firstname: string;
    lastname: string;
    company?: string;
    phoneNumbers: [{
        countryCode: string,
        digits: string,
        label: string,
        number: string
    }];
    emails?: [{
        email: string,
        label: string
    }];
    addresses?: [{
        city: string,
        country: string,
        isoCountryCode: string,
        label: string,
        postalCode: string,
        region: string,
        street: string
    }];
    contactType?: string;
}