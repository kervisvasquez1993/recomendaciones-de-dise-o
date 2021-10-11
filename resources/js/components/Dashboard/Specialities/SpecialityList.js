import React, { useEffect } from "react";
import { MdWorkOutline } from "react-icons/md";
import { RiAddCircleLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getSpecialities } from "../../../store/actions/specialityActions";
import PageHeader from "../Layout/PageHeader";
import SpecialityItem from "./SpecialityItem";

const SpecialityList = () => {
    const dispatch = useDispatch();
    // @ts-ignore
    const specialities = useSelector((state) => state.speciality.list);
    // @ts-ignore
    const isLoading = useSelector((state) => state.speciality.isLoadingList);

    useEffect(() => {
        dispatch(getSpecialities());
    }, []);

    if (isLoading) {
        return <div></div>;
    }

    return (
        <>
            <PageHeader
                title="Especialidades"
                description="Use esta seccion para crear, editar o eliminar las areas de emprendimiento"
                icon={<MdWorkOutline />}
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
                                            <th>Etiqueta</th>
                                            <th>Descripción</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {specialities.map((item) => {
                                            return (
                                                <SpecialityItem
                                                    key={item.id}
                                                    speciality={item}
                                                />
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="d-flex flex-wrap justify-content-between">
                                <p>{specialities.length} elementos</p>
                                <Link
                                    to="especialidades/crear"
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

export default SpecialityList;
