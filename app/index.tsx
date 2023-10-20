import Login from "../pages/login/Login";
import Home from "./(home)";
import {Redirect} from "expo-router";

const LoginRoute = () => {

    return (
        <Redirect href="/(home)" />
    )
}

export default LoginRoute;