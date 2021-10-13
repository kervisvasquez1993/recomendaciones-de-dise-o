import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SavedResultActions from "../../store/actions/SavedResultActions";
import ResultCard from "./Wizard/ResultCard";

const SavedResultList = () => {
    const dispatch = useDispatch();
    // @ts-ignore
    const savedResults = useSelector((state) => state.savedResult.list);

    useEffect(() => {
        dispatch(SavedResultActions.getList());
    }, []);

    return (
        <div className="section section-padding">
            <div className="container">
                <h2 className="heading mb-5 text-uppercase font-weight-bold">
                    Imagenes corportivas guardadas
                </h2>

                <div className="wizard">
                    <div className="results">
                        {savedResults.map(
                            ({ resultado, id, nombre_empresa }) => (
                                <ResultCard
                                    data={resultado}
                                    name={nombre_empresa}
                                    key={id}
                                    saved={id}
                                />
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SavedResultList;
