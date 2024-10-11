import "./login.css";
import { useCallback } from "react"
import useAuthStore from "../../stores/use-auth-store"
import { useEffect } from "react"
import userDAO from "../../daos/userDAO";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const { user, loginGoogleWithPopUp, observeAuthState, logout } = useAuthStore ();
    const navigate = useNavigate();

    const handleLogin = useCallback(() => {
        loginGoogleWithPopUp();
    }, [loginGoogleWithPopUp]);

    useEffect(() => {
        observeAuthState();

    }, [observeAuthState,]);


    return (
        <div className="container-login">
            <img className="container-login-logo" src="/earth.png" alt="" />
            <button onClick={handleLogin}> Iniciar sesion </button>
        </div>
    )
} 