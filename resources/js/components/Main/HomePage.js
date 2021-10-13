import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useUser } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { setCompanyName } from "../../store/actions/companyActions";
import SavedResultList from "./SavedResultList";
import { MdPhoneIphone } from "react-icons/md";
import { BsFillEnvelopeFill } from "react-icons/bs";
import {
    FaFacebookF,
    FaLinkedinIn,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";

const socialMedias = [
    {
        icon: <FaTwitter className="icon-md" />,
        link: "https://twitter.com/pypage",
    },
    {
        icon: <FaYoutube className="icon-md" />,
        link: "https://www.youtube.com/user/pypage",
    },
    {
        icon: <FaLinkedinIn className="icon-md" />,
        link: "https://www.linkedin.com/company/pypage",
    },
    {
        icon: <FaFacebookF className="icon-md" />,
        link: "https://www.facebook.com/pypage",
    },
];

const HomePage = () => {
    const user = useUser();
    const history = useHistory();
    const dispatch = useDispatch();

    // @ts-ignore
    const name = useSelector((state) => state.company.name);

    const handleSubmit = (e) => {
        e.preventDefault();

        history.push("/proceso/imagen");
    };

    return (
        <>
            <div className="section section-padding background-1">
                <div className="container h-100 d-flex flex-column justify-content-center background-centered-content text-primary">
                    {user && (
                        <h2 className="mb-5 font-weight-bold">
                            !Bienvenido {user.name}!
                        </h2>
                    )}
                    <p className="text-primary">
                        En PYPAGE agencia de diseño y marketing digital nos
                        involucramos con nuevas tecnologías para asegurar
                        resultados óptimos en nuestros servicios
                    </p>
                    {user ? (
                        <div>
                            {user.rol === "admin" && (
                                <Link to="/dashboard">
                                    <button className="btn btn-primary btn-lg btn-decoration">
                                        Dashboard
                                    </button>
                                </Link>
                            )}
                            <Link to="/logout">
                                <button className="btn btn-link btn-lg btn-decoration">
                                    Cerrar Sesión
                                </button>
                            </Link>
                        </div>
                    ) : (
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
                    )}
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
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nombre"
                                    name="nombre"
                                    placeholder="Ingresa el nombre de tu empresa"
                                    value={name}
                                    onChange={(e) =>
                                        dispatch(setCompanyName(e.target.value))
                                    }
                                />
                            </div>

                            <button
                                className="btn btn-secondary btn-lg"
                                disabled={!name}
                            >
                                Comenzar
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {user && <SavedResultList />}

            <div className="section section-secondary section-padding">
                <div className="container text-center">
                    <h2 className="heading mb-5 text-uppercase font-weight-bold">
                        Contactanos
                    </h2>
                    <div className="contact-list-container">
                        <div className="contact-item">
                            <MdPhoneIphone className="icon icon-lg" />
                            <div className="px-2">
                                <h3 className="title">Telefono</h3>
                                <p>0414 4205804</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <BsFillEnvelopeFill className="icon icon-lg" />
                            <div className="px-2">
                                <h3 className="title">Correo</h3>
                                <p>pypageagency@gmail.com</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="px-2">
                                <h3 className="title">Redes</h3>
                                <div>
                                    {socialMedias.map(
                                        ({ icon, link }, index) => (
                                            <a
                                                key={index}
                                                href={link}
                                                target="_blank"
                                                className="text-white p-2"
                                            >
                                                {icon}
                                            </a>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="section section-padding">
                <div className="container text-center">
                    <p>© Copyright 2021</p>
                </div>
            </footer>
        </>
    );
};

export default HomePage;
