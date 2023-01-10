import { JwtAuthService } from "../jwtAuthService";
import Cookies from "js-cookie";
import { User } from "../../types/User";

export const useLogin = () => {
    const login = async (username: string, password: string) => {
        const user = await JwtAuthService.login(username, password);
        if(user){
            Cookies.set("currentUser", JSON.stringify(user));
        }
        return user as User;
    };

    return { login };
}