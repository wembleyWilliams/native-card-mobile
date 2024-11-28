
interface Address {
    label?: string;
    street?: string;
    city?: string;
    state?: string;
    postalCode?: string;
    country: string;
}

interface Media {
    data?: string;
    mime?: string;
    url?: string;
    mediaType: string;
    base64: boolean;
    attachFromUrl?: (url: string) => void;
    embedFromFile?: (file: File) => void;
    embedFromString?: (data: string) => void;
}

export interface Social {
    userId: string;
    businessId: string;
    platform: string;
    profileName: string;
    created_at: string;
    updated_at: string;
    profileUrl: string;
}

interface SocialUrls {
    facebook?: string;
    linkedIn?: string;
    twitter?: string;
    flickr?: string;
}
//
// export interface BusinessData {
//     industry: string;
//     phone: string;
//     _id: string,
//     logo?: { data?: string | undefined, mime?: string | undefined },
//     name: string,
//     description: string,
//     contact: Contact,
//     address: {
//         street: string,
//         city: string,
//         state: string,
//         postalCode?: string,
//         country: string
//     },
//     pointOfContact: string,
//     contactEmail: string,
//     businessHandles: [{
//         socialMedia: string,
//         profileName: string,
//         profileUrL: string,
//     }]
// }
export interface BusinessData {
    _id: string;
    name: string;
    industry: string;
    address: Address;
    website?: string;
    contactEmail: string;
    phone: string;
    socials: Social[];
    description: string;
    logo?: Media;
    // user: UserBusinessRole;
    userId: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface UserBusinessRole {
    _id: string
    userId: string;
    businessId?: string;
    role: string;
}

export interface UserData {
    _id: string,
    createdAt: string,
    updatedAt: string
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    address: Address;
    phone: string;
    profilePicture?: Media;
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

export interface VCardData {
    vcardOwnerType: string; //User or Business
    birthday: string;
    cellPhone: string;
    pagerPhone?: string;
    email: string;
    workEmail: string;
    firstName: string;
    formattedName: string;
    gender: string;
    homeAddress: {
        label: string;
        street: string;
        city: string;
        stateProvince: string;
        postalCode: string;
        countryRegion: string;
    };
    homePhone?: string;
    homeFax?: string;
    lastName: string;
    logo: Media;
    middleName?: string;
    namePrefix?: string;
    nameSuffix?: string;
    nickname?: string;
    note: string;
    organization: string;
    photo: Media;
    role: string;
    socialUrls: {
        facebook?: string;
        linkedIn?: string;
        twitter?: string;
        flickr?: string;
    };
    source: string;
    title: string;
    url: string;
    workUrl?: string;
    workAddress: {
        label: string;
        street: string;
        city: string;
        stateProvince: string;
        postalCode: string;
        countryRegion: string;
    };
    workPhone?: string;
    workFax?: string;
    version: string;
}



export interface ApplicationState {
    application: { cardData: CardData }
}
export interface CardData {
    _id: string;
    userId: string;
    businessId: string;
    tapCount: number;
    lastTap: string;
    taps: {
        timestamp: string;
        location: string;
        deviceInfo: string;
    }[];
    createdAt: string;
    deactivatedAt: string;
    status: boolean;
    socialsData: {
        platform: string;
        profileName: string;
        profileUrl: string;
    }[];
    roleData: {
        _id: string;
        userId: string;
        businessId: string;
        role: string;
    };
    vcardData: {
        _id: string;
        birthday: string;
        cellPhone: string;
        pagerPhone: string;
        email: string;
        workEmail: string;
        firstName: string;
        formattedName: string;
        gender: string;
        homeAddress: {
            label: string;
            street: string;
            city: string;
            stateProvince: string;
            postalCode: string;
            countryRegion: string;
        };
        homePhone: string;
        homeFax: string;
        lastName: string;
        logo: {
            url: string;
            mediaType: string;
            base64: boolean;
        };
        middleName: string;
        namePrefix: string;
        nameSuffix: string;
        nickname: string;
        note: string;
        organization: string;
        photo: {
            url: string;
            mediaType: string;
            base64: boolean;
        };
        role: string;
        socialUrls: {
            instagram: string;
        };
        source: string;
        title: string;
        url: string;
        workUrl: string;
        workAddress: {
            label: string;
            street: string;
            city: string;
            stateProvince: string;
            postalCode: string;
            countryRegion: string;
        };
        workPhone: string;
        workFax: string;
        version: string;
        ownerId: string;
    };
    userData: {
        _id: string;
        firstName: string;
        lastName: string;
        age: number;
        email: string;
        address: {
            street: string;
            city: string;
            state: string;
            postalCode: string;
            country: string;
        };
        phone: string;
    };
    businessData: {
        _id: string;
        name: string;
        industry: string;
        address: {
            street: string;
            city: string;
            state: string;
            postalCode: string;
            country: string;
        };
        website: string;
        contactEmail: string;
        phone: string;
        socials: {
            platform: string;
            profileName: string;
            profileUrl: string;
        }[];
        description: string;
        logo: {
            mime: string;
            data: string;
        };
    };
}
