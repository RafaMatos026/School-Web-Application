import { useEffect, useState } from "react";
import { User } from "../types/User";
import { AuthContext } from "./AuthContext";
import { BASE_URL } from "../shared/consts";


export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        validateToken();
    }, [])

    function validateToken() {
        let url = BASE_URL + '/auth/validateToken';
        const token = localStorage.getItem('token');
        if (token) {
            fetch(url, {
                method: 'POST',
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify({ Token: token })
            })
                .then((response) => {
                    return response.json();
                })
                .then((data) => {

                    if (data) {
                        setUser(data);
                    }
                })
                .catch(err => {
                    console.log(err.message);
                })
        }
    }

    const setToken = (token: string) => {
        localStorage.setItem('token', token);
    }

    const signin = async (Email: string, Password: string) => {
        let url = BASE_URL + '/auth/login'
        return fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                Email: Email,
                Password: Password
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then((response) => {
                if (!response.ok) {
                    alert('Login failed: Email or password incorrect!')
                }
                return response.json();
            })
            .then((data) => {

                if (data.access_token && data.user) {

                    setUser(data.user);
                    setToken(data.access_token);
                    return data.user;
                }
                return null;
            })
            .catch(erro => {
                alert("Login failed: " + erro.message);
                return null;
            })
    }

    const signout = async () => {
        setUser(null);
        setToken('');
        localStorage.removeItem('token');
    }

    return (
        <AuthContext.Provider value={{ user, signin, signout, validateToken }}>
            {children}
        </AuthContext.Provider>
    );
}