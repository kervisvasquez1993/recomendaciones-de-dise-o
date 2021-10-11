import React, { useEffect } from "react";
import { FaClipboardCheck } from "react-icons/fa";
import { RiAddCircleLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ResultActions from "../../../store/actions/ResultActions";
import PageHeader from "../Layout/PageHeader";
import ResultItem from "./ResultItem";

export const BASE_PATH = "resultados";

const ResultList = () => {
    const dispatch = useDispatch();
    // @ts-ignore
    const list = useSelector((state) => state.result.list);
    // @ts-ignore
    const isLoading = useSelector((state) => state.result.isLoadingList);

    useEffect(() => {
        dispatch(ResultActions.getList());
    }, []);

    if (isLoading) {
        return <div></div>;
    }

    return (
        <>
            <PageHeader
                title="Resultados"
                description="Esta seccion sirve para crear, editar o eliminar los resultados"
                icon={<FaClipboardCheck />}
            />

            <div className="row">
                <div className="col">
                    <div className="card table-card">
                        <div className="card-block">
                            <div className="table-responsive">
                                <table className="table table-hover mb-0">
                                    <thead>
                                        <tr>
                                            <th>Especialidad</th>
                                            <th>Estilo</th>
                                            <th>Fuentes</th>
                                            <th>Colores</th>
                                            <th>Descripcion</th>
                                            <th>Tipo de Logo</th>
                                            <th>Ilustracion</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {list.map((item) => {
                                            return (
                                                <ResultItem
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

export default ResultList;
