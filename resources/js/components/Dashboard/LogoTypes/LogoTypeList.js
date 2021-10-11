import React, { useEffect } from "react";
import { AiFillFileImage } from "react-icons/ai";
import { RiAddCircleLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LogoTypeActions from "../../../store/actions/LogoTypeActions";
import PageHeader from "../Layout/PageHeader";
import LogoTypeItem from "./LogoTypeItem";

export const BASE_PATH = "logotipos";

const LogoTypeList = () => {
    const dispatch = useDispatch();
    // @ts-ignore
    const list = useSelector((state) => state.logoType.list);
    // @ts-ignore
    const isLoading = useSelector((state) => state.logoType.isLoadingList);

    useEffect(() => {
        dispatch(LogoTypeActions.getList());
    }, []);

    if (isLoading) {
        return <div></div>;
    }

    return (
        <>
            <PageHeader
                title="Tipos de Logotipo"
                description="Esta seccion sirve para crear, editar o eliminar tipos de logotipo"
                icon={<AiFillFileImage />}
            />

            <div className="row">
                <div className="col">
                    <div className="card table-card">
                        <div className="card-block">
                            <div className="table-responsive">
                                <table className="table table-hover mb-0">
                                    <thead>
                                        <tr>
                                            <th>Nombre</th>
                                            <th>Descripción</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {list.map((item) => {
                                            return (
                                                <LogoTypeItem
                                                    key={item.id}
                                                    data={item}
                                                />
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="d-flex flex-wrap justify-content-between">
                                <p>{list.length} elementos</p>
                                <Link
                                    to={`${BASE_PATH}/crear`}
                                    type="submit"
                                    className="btn btn-success mr-2"
                                >
                                    <RiAddCircleLine className="mr-1" />
                                    Agregar
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LogoTypeList;
