import React, {useContext, useState} from 'react';

import {useHistory} from "react-router-dom";
import {getId, login} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Login = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            await login(email, password);
            let id = await getId();
            user.setUser(user)
            user.setIsAuth(true)
            user.setId(id)
            history.push(`/${user.id}`)
        } catch (e) {
            console.error(e)
            alert(e.response?.data?.message)
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
                                <button type="button" className="btn btn-dark btn-block" onClick={click}>Login</button>
                            </div>
                        </form>
                    </article>
                </div>
            </div>
        </div>
    );
});

export default Login;
