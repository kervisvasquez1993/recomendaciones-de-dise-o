import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
// @ts-ignore
import iconsb from "../../../images/iconsb.png";
import { login } from "../../store/actions/authActions";
import { useUser } from "../../utils";
import { extractError } from "../Dashboard/Form/utils";

const Login = ({ signUp = false }) => {
    const dispatch = useDispatch();
    // @ts-ignore
    const error = useSelector((state) => state.auth.error);
    // @ts-ignore
    const errors = useSelector((state) => state.auth.errors);
    const errorEmail = extractError(errors, "email");
    const errorName = extractError(errors, "name");
    const user = useUser();

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const id = e.target.id;

        console.log({
            ...data,
            [id]: e.target.value,
        });

        setData({
            ...data,
            [id]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (signUp) {
            dispatch(login(data, true));
        } else {
            dispatch(login(data));
        }
    };

    if (user) {
        return <Redirect to="/" />;
    }

    return (
        <div className="auth-wrapper">
            <div className="container-fluid h-100">
                <div className="row flex-row h-100 bg-white">
                    <div className="col-xl-8 col-lg-6 col-md-5 p-0 d-md-block d-lg-block d-sm-none d-none">
                        <div className="lavalite-bg">
                            <div className="lavalite-overlay"></div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-7 my-auto p-0">
                        <div className="authentication-form mx-auto">
                            <div className="logo-centered">
                                <a href="">
                                    <img width="150" src={iconsb} alt="logo" />
                                </a>
                            </div>
                            <p>
                                {signUp ? "Regístrate hoy!" : "Iniciar sesión"}
                            </p>

                            <form onSubmit={handleSubmit}>
                                {signUp && (
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Nombre"
                                            id="name"
                                            required
                                            onChange={handleChange}
                                            value={data.name}
                                        />
                                        <i className="ik ik-user"></i>
                                    </div>
                                )}

                                <div className="form-group">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email"
                                        id="email"
                                        required
                                        onChange={handleChange}
                                        value={data.email}
                                    />
                                    <i className="fa fa-envelope"></i>
                                    {errorEmail && (
                                        <div className="text-danger">
                                            <strong>{errorEmail}</strong>
                                        </div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Contraseña"
                                        id="password"
                                        required
                                        onChange={handleChange}
                                        value={data.password}
                                    />
                                    <i className="ik ik-lock"></i>
                                </div>

                                {error && (
                                    <div className="text-danger">
                                        <strong>{error}</strong>
                                    </div>
                                )}

                                <div className="sign-btn text-center">
                                    <button className="btn btn-theme">
                                        {signUp
                                            ? "Crear Cuenta"
                                            : " Iniciar Sesión"}
                                    </button>
                                </div>
                            </form>
                            {signUp ? (
                                <div className="register">
                                    <p>
                                        ¿Ya tienes una cuenta?{" "}
                                        <Link
                                            to="/login"
                                            style={{
                                                textDecoration: "underline",
                                            }}
                                        >
                                            Iniciar Sesión
                                        </Link>
                                    </p>
                                </div>
                            ) : (
                                <div className="register">
                                    <p>
                                        ¿Aún no has creado una cuenta?{" "}
                                        <Link
                                            to="/register"
                                            style={{
                                                textDecoration: "underline",
                                            }}
                                        >
                                            Registrate gratis
                                        </Link>
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Login;
