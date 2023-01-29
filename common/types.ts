export interface BusinessData {
    _id: string,
    logo?: { data: string, mime: string },
    name: string,
    description: string,
    contact: string,
    address: string,
    pointOfContact: string,
    email: string,
    socialMedia: [{
        profileName: string,
        profileURL: string,
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
    application: { UserData: {}, BusinessData: any }
}