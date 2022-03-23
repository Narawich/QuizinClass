import React, { createContext, useState, useEffect, useContext } from "react";
import cookie from 'js-cookie'
import axios from 'axios';

const AuthContext = createContext();

export const AuthContextProvider = (props) => {
    const [isLogin, setIsLogin] = useState(false)
    const [loginBy, setLoginBy] = useState('')
    // const [cookie, setCookie] = useState('');
    const googleAuth = ({ profileObj }) => {
        axios.post("http://localhost:7050/auth/login", {
            data: {
                googleId: profileObj.googleId,
                email: profileObj.email,
                first_name: profileObj.givenName,
                last_name: profileObj.familyName
            }
        })
            .then(res => {
                console.log(res.data)
                return res.data

            })
            .then(data => {
                const message = data.message
                const token = data.token.split("Bearer", 1)
                cookie.set(token)
                setIsLogin(true)
                setLoginBy(data.user.name)

            })
            .catch(err => console.log(err))
    }

    const logoutHandler = () => {
        cookie.remove('token')
        setIsLogin(false)
    }


    return (
        <AuthContext.Provider
            value={{
                loginHandler: googleAuth,
                logoutHandler: logoutHandler,
                isLogin: isLogin,
                loginBy: loginBy
            }}>
            {props.children}
        </AuthContext.Provider >
    );
}

export const useAuthContext = () => useContext(AuthContext);
export default AuthContext