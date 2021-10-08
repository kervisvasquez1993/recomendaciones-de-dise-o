import React, { useEffect } from "react";
import { lg } from "../../../../boostrapVariables";
import SidebarLabel from "./SidebarLabel";
import SidebarLink from "./SidebarLink";
import {
    AiOutlineClose,
    AiOutlineFontSize,
    AiOutlineHome,
} from "react-icons/ai";
import { RiPaintBrushFill } from "react-icons/ri";
import { MdWorkOutline } from "react-icons/md";
// @ts-ignore
import logo from "../../../../../images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { setHideSidebar } from "../../../../store/actions/layoutReducer";

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
                <a className="header-brand" href="{{route('dashboard')}}">
                    <div className="logo-img">
                        <img
                            height="30"
                            src={logo}
                            className="header-brand-img"
                            title="RADMIN"
                        />
                    </div>
                </a>
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

                        <SidebarLabel label="Documentation" />

                        <SidebarLink to="/dashboard" label="API" />
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;