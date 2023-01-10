import axios, { AxiosInstance } from 'axios';

export class JwtAuthService {
    protected readonly instance: AxiosInstance;
    public constructor(url : string) {
        this.instance = axios.create({
            baseURL: url,
            timeout: 30000,
            timeoutErrorMessage: 'Time out',
        });
    }

    login = async (username: string, password: string) => {
        const res = await this.instance
            .post('/api/auth', { username, password });
        return {
            username: res.data.username,
            accessToken: res.data.accessToken,
            expiresAt: res.data.expiresAt,
        };
    }
}