import React from "react";
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
// @ts-ignore
import logo from "../../../images/logo.png";

const HomePage = () => {
    return (
        <div className="home-page">
            <header className="header">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <Link to="/">
                            <img className="logo-img" src={logo} />
                        </Link>
                        <TiThMenu className="p-2 icon-xl text-primary" />
                    </div>
                </div>
            </header>
            <div className="section section-padding background-1">
                <div className="container h-100 d-flex flex-column justify-content-center background-centered-content text-primary">
                    <p className="text-primary">
                        En PYPAGE agencia de diseño y marketing digital nos
                        involucramos con nuevas tecnologías para asegurar
                        resultados óptimos en nuestros servicios
                    </p>
                    <div>
                        <Link to="/login">
                            <button className="btn btn-primary btn-lg btn-decoration">
                                Iniciar Sesión
                            </button>
                        </Link>
                        <Link to="/register">
                            <button className="btn btn-secondary btn-lg">
                                Registrarse
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="section section-padding">
                <div className="container">
                    <h2 className="heading mb-5 text-uppercase font-weight-bold">
                        Crea una imagen corportiva
                    </h2>

                    <div className="max-width-md">
                        <p className="mb-4">
                            Pruebe nuestro nuevo sistema de evaluación de Imagen
                            Corporativa (Logotipo), el cual les recomendará
                            parámetros estéticos de diseño que mejorará el
                            impacto de su empresa/marca hacia su público
                            objetivo.
                        </p>
                        <form>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nombre"
                                    name="nombre"
                                    placeholder="Ingresa el nombre de tu empresa"
                                />
                            </div>

                            <button className="btn btn-secondary btn-lg">
                                Comenzar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <footer className="section section-padding">
                <div className="container text-center">
                    <p>© Copyright 2021</p>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
