interface User {
    id: number;
    username: string;
    email: string;
    accessToken: string;
    streamKey?: string
}

export default User