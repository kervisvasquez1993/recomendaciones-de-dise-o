import React from "react";
import { Link } from "react-router-dom";
// @ts-ignore
import iconsb from "../../../images/iconsb.png";

const Login = ({ signUp = false }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

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
                                            type="name"
                                            className="form-control"
                                            placeholder="Name"
                                            name="name"
                                            required
                                        />
                                        <i className="ik ik-user"></i>
                                    </div>
                                )}

                                <div className="form-group">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email"
                                        name="email"
                                        required
                                    />
                                    <i className="fa fa-envelope"></i>
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Password"
                                        name="password"
                                        required
                                    />
                                    <i className="ik ik-lock"></i>
                                </div>
                                {signUp && (
                                    <div className="form-group">
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="Confirm Password"
                                            name="password_confirmation"
                                            required
                                        />
                                        <i className="ik ik-eye-off"></i>
                                    </div>
                                )}

                                <div className="sign-btn text-center">
                                    <button className="btn btn-theme">
                                        Crear Cuenta
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
