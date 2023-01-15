import axios, { AxiosInstance } from "axios";

export default class JwtAuthService {
  protected readonly instance: AxiosInstance;
  public constructor(url: string) {
    this.instance = axios.create({
      baseURL: url,
      timeout: 30000,
      timeoutErrorMessage: "Time out",
    });
  }

  login = (username: string, password: string) => {
    return this.instance
      .post("/api/login", {
        username,
        password,
      })
      .then((res) => {
        return {
          username: res.data.username,
          accessToken: res.data.accessToken,
          expiresAt: res.data.expiresAt,
        };
      });
  };
}
