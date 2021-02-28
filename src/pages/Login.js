import React, {useContext, useState} from 'react';

import {useHistory} from "react-router-dom";
import {login} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Login = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data = await login(email, password);
            user.setUser(user)
            user.setIsAuth(true)
            history.push("/")
        } catch (e) {
            alert(e.response.data.message)
        }

    }

    return (
        <div className="row mt-4">
            <div className="col-4 mx-auto">
                <div className="card">
                    <article className="card-body">
                        <h4 className="card-title text-center mb-4 mt-1">Log In</h4>
                        <form>
                            <div className="form-group">
                                <div className="input-group">
                                    <input
                                        className="form-control"
                                        placeholder="Введите ваш email..."
                                        name="email"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <input
                                        className="form-control"
                                        type="password"
                                        name="password"
                                        placeholder="Введите ваш пароль..."
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-dark btn-block">Login</button>
                            </div>
                        </form>
                    </article>
                </div>
            </div>
        </div>
    );
});

export default Login;
