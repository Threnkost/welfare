import { SignOut } from './../Services/api/auth';
import { SignIn } from "../Services/api/auth";


interface IHTTPMethods {
    SignIn: typeof SignIn,
    SignOut: typeof SignOut
}


export const HTTPMethods: IHTTPMethods = {
    SignIn,
    SignOut
}
