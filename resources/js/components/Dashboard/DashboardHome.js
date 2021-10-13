import React from "react";
import { Link } from "react-router-dom";

const DashboardHome = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <div className="card table-card proj-t-card">
                        <div className="card-body">
                            <p>
                                Utilice este panel de administración para poder
                                ver, agregar, editar y eliminar toda la
                                información del sistema.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardHome;
