import Login from "../pages/login/Login";
import {Redirect} from "expo-router";
import Home from "../pages/home/Home";



const LoginRoute = () => {

  return (
      <Redirect href="/(auth)" />
  );
}

export default LoginRoute;