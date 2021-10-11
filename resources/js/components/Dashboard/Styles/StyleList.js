import React, { useEffect } from "react";
import { RiAddCircleLine, RiPaintBrushFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getStyles } from "../../../store/actions/styleActions";
import PageHeader from "../Layout/PageHeader";
import StyleItem from "./StyleItem";

const StyleList = () => {
    const dispatch = useDispatch();
    // @ts-ignore
    const list = useSelector((state) => state.style.list);
    // @ts-ignore
    const isLoading = useSelector((state) => state.style.isLoadingList);

    useEffect(() => {
        dispatch(getStyles());
    }, []);

    if (isLoading) {
        return <div></div>;
    }

    return (
        <>
            <PageHeader
                title="Estilos"
                description="Esta seccion sirve para crear, editar o eliminar los estilos de logo"
                icon={<RiPaintBrushFill />}
            />

            <div className="row">
                <div className="col">
                    <div className="card table-card">
                        {/* <div className="card-header">
                            <h3>Especialidades</h3>
                        </div> */}
                        <div className="card-block">
                            <div className="table-responsive">
                                <table className="table table-hover mb-0">
                                    <thead>
                                        <tr>
                                            <th>Nombre</th>
                                            <th>Etiqueta</th>
                                            <th>Descripción</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {list.map((item) => {
                                            return (
                                                <StyleItem
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
                                    to="estilos/crear"
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

export default StyleList;
