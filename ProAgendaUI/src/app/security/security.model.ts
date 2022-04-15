export interface userCredentials{
    id: Number,
    email: string,
    password: string,
    name: string,
    lastName: string,
    avatar : File
}

export interface authenticationResponse {
    token: string;
    expiration: Date;
}