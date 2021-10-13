import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { lg } from "../../boostrapVariables";
import { setHideSidebar } from "../../store/actions/layoutReducer";
import DashboardHome from "./DashboardHome";
import NotFoundError from "./NotFoundError";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import Sidebar from "./Layout/Sidebar/Sidebar";
import SpecialityForm from "./Specialities/SpecialityForm";
import SpecialityList from "./Specialities/SpecialityList";
import StyleList from "./Styles/StyleList";
import StyleForm from "./Styles/StyleForm";
import FontList from "./Fonts/FontList";
import FontForm from "./Fonts/FontForm";
import IllustrationList from "./Illustrations/IllustrationList";
import IllustrationForm from "./Illustrations/IllustrationForm";
import LogoTypeList from "./LogoTypes/LogoTypeList";
import LogoTypeForm from "./LogoTypes/LogoTypeForm";
import ResultList from "./Results/ResultList";
import ResultForm from "./Results/ResultForm";
import { useUser } from "../../utils";

const Dashboard = () => {
    const dispatch = useDispatch();
    const user = useUser();
    // @ts-ignore
    const hideSidebar = useSelector((state) => state.layout.hideSidebar);

    const handleCloseSidebar = () => {
        if (!hideSidebar && window.innerWidth < lg) {
            dispatch(setHideSidebar(true));
        }
    };

    if (!user || user.rol !== "admin") {
        return <Redirect to="/" />;
    }

    return (
        <div className="wrapper">
            <Header />
            <div className="page-wrap" onClick={handleCloseSidebar}>
                <Sidebar />

                <div className="main-content">
                    <div className="container-fluid">
                        <Switch>
                            <Route path="/dashboard" exact>
                                <DashboardHome />
                            </Route>
                            <Route path="/dashboard/especialidades" exact>
                                <SpecialityList />
                            </Route>
                            <Route path="/dashboard/especialidades/crear" exact>
                                <SpecialityForm />
                            </Route>
                            <Route path="/dashboard/especialidades/:id" exact>
                                <SpecialityForm isEditor={true} />
                            </Route>
                            <Route path="/dashboard/estilos" exact>
                                <StyleList />
                            </Route>
                            <Route path="/dashboard/estilos/crear" exact>
                                <StyleForm />
                            </Route>
                            <Route path="/dashboard/estilos/:id" exact>
                                <StyleForm isEditor={true} />
                            </Route>
                            <Route path="/dashboard/fuentes" exact>
                                <FontList />
                            </Route>
                            <Route path="/dashboard/fuentes/crear" exact>
                                <FontForm />
                            </Route>
                            <Route path="/dashboard/fuentes/:id" exact>
                                <FontForm isEditor={true} />
                            </Route>
                            <Route path="/dashboard/ilustraciones" exact>
                                <IllustrationList />
                            </Route>
                            <Route path="/dashboard/ilustraciones/crear" exact>
                                <IllustrationForm />
                            </Route>
                            <Route path="/dashboard/ilustraciones/:id" exact>
                                <IllustrationForm isEditor={true} />
                            </Route>
                            <Route path="/dashboard/logotipos" exact>
                                <LogoTypeList />
                            </Route>
                            <Route path="/dashboard/logotipos/crear" exact>
                                <LogoTypeForm />
                            </Route>
                            <Route path="/dashboard/logotipos/:id" exact>
                                <LogoTypeForm isEditor={true} />
                            </Route>
                            <Route path="/dashboard/resultados" exact>
                                <ResultList />
                            </Route>
                            <Route path="/dashboard/resultados/crear" exact>
                                <ResultForm />
                            </Route>
                            <Route path="/dashboard/resultados/:id" exact>
                                <ResultForm isEditor={true} />
                            </Route>
                            <Route path="*">
                                <NotFoundError />
                            </Route>
                        </Switch>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
};

export default Dashboard;
