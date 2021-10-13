import React, { useEffect } from "react";
import { AiOutlineFontSize } from "react-icons/ai";
import { RiAddCircleLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FontActions from "../../../store/actions/fontActions";
import PageHeader from "../Layout/PageHeader";
import FontItem from "./FontItem";

export const BASE_PATH = "fuentes";

const FontList = () => {
    const dispatch = useDispatch();
    // @ts-ignore
    const list = useSelector((state) => state.font.list);
    // @ts-ignore
    const isLoading = useSelector((state) => state.font.isLoadingList);

    useEffect(() => {
        // dispatch(getFonts());
        dispatch(FontActions.getList());
    }, []);

    if (isLoading) {
        return <div></div>;
    }

    return (
        <>
            <PageHeader
                title="Fuentes"
                description="Esta seccion sirve para crear, editar o eliminar fuentes"
                icon={<AiOutlineFontSize />}
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
                                            <th>Ejemplo</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {list.map((item) => {
                                            return (
                                                <FontItem
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

export default FontList;
