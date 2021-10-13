import React, { useEffect } from "react";
import { lg } from "../../../../boostrapVariables";
import SidebarLabel from "./SidebarLabel";
import SidebarLink from "./SidebarLink";
import {
    AiOutlineClose,
    AiOutlineFileImage,
    AiOutlineFontSize,
    AiOutlineHome,
} from "react-icons/ai";
import { RiPaintBrushFill } from "react-icons/ri";
import { MdOutlineDomain, MdWorkOutline } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
// @ts-ignore
import logo from "../../../../../images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { setHideSidebar } from "../../../../store/actions/layoutReducer";
import { FaClipboardCheck, FaPencilAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Dashboard = () => {
    const dispatch = useDispatch();
    // @ts-ignore
    const hideSidebar = useSelector((state) => state.layout.hideSidebar);

    useEffect(() => {
        const callback = () => {
            dispatch(setHideSidebar(window.innerWidth < lg));
        };

        window.addEventListener("resize", callback);
        callback();

        return () => {
            window.removeEventListener("resize", callback);
        };
    }, []);

    const handleCloseSidebar = () => {
        dispatch(setHideSidebar(true));
    };

    return (
        <div
            className={`app-sidebar colored ${
                hideSidebar ? "hide-sidebar" : ""
            }`}
        >
            <div className="sidebar-header">
                <Link to="/dashboard" className="header-brand">
                    <div className="logo-img">
                        <img
                            height="30"
                            src={logo}
                            className="header-brand-img"
                            title="RADMIN"
                        />
                    </div>
                </Link>
                <div className="sidebar-action">
                    <i className="ik ik-arrow-left-circle"></i>
                </div>
                <button id="sidebarClose" className="nav-close">
                    <AiOutlineClose onClick={handleCloseSidebar} />
                </button>
            </div>

            <div className="sidebar-content">
                <div className="nav-container">
                    <nav id="main-menu-navigation" className="navigation-main">
                        <SidebarLink
                            to="/dashboard"
                            label="Inicio"
                            icon={<AiOutlineHome />}
                        />
                        <SidebarLink
                            to="/dashboard/especialidades"
                            label="Especialidades"
                            icon={<MdWorkOutline />}
                        />
                        <SidebarLink
                            to="/dashboard/estilos"
                            label="Estilos"
                            icon={<RiPaintBrushFill />}
                        />
                        <SidebarLink
                            to="/dashboard/fuentes"
                            label="Fuentes"
                            icon={<AiOutlineFontSize />}
                        />
                        <SidebarLink
                            to="/dashboard/ilustraciones"
                            label="Ilustraciones"
                            icon={<AiOutlineFileImage />}
                        />
                        <SidebarLink
                            to="/dashboard/logotipos"
                            label="Tipos de Logo"
                            icon={<FaPencilAlt />}
                        />
                        <SidebarLink
                            to="/dashboard/resultados"
                            label="Resultados"
                            icon={<FaClipboardCheck />}
                        />

                        <SidebarLabel label="Página" />

                        <SidebarLink
                            to="/"
                            label="Página Principal"
                            icon={<MdOutlineDomain />}
                        />

                        <SidebarLink
                            to="/logout"
                            label="Cerrar Sesión"
                            icon={<BiLogOut />}
                        />
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
