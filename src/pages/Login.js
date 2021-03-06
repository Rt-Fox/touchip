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
            await login(email, password)
            let id = await getId();
            user.setUser(user)
            user.setIsAuth(true)
            user.setId(id)
            history.push(`/${user.id}`)
        } catch (e) {
            alert('проверьте введенные данные')
        }

    }

    return (
        <div className="vh-100 bg-login row d-flex justify-content-center align-items-center">
            <div className={"TOUCH-title"}>TOUCH.IP</div>
            <div className="col-10 col-sm-9 col-md-8 col-lg-5 col-xl-4 mx-auto">
                <div className="card">
                    <article className="card-body">
                        <h1 className="card-title text-center mt-1">ВХОД</h1>
                        <form>
                            <div className="form-group">
                                <div>Логин</div>
                                <div className="input-group input-login">
                                    <input
                                        className="form-control"
                                        placeholder="Введите логин..."
                                        name="email"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        required
                                    />
                                    <i className="fa fa-user-circle-o"></i>
                                </div>
                            </div>
                            <div className="form-group">
                                <div>Пароль</div>
                                <div className="input-group input-pas">
                                    <input
                                        className="form-control"
                                        type="password"
                                        name="password"
                                        placeholder="Введите пароль..."
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        required
                                    />
                                    <i className="fa fa-lock"></i>
                                </div>
                            </div>
                            <div className="form-group d-flex align-self-center justify-content-center">
                                <button type="button" className="btn btn-danger btn-block" onClick={click}>Войти</button>
                            </div>
                        </form>
                    </article>
                </div>
            </div>
        </div>
    );
});

export default Login;
