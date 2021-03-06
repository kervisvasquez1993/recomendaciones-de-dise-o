import React, { useEffect } from "react";
import { MdWorkOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import GenericFormCard from "../Form/GenericFormCard";
import InputText from "../Form/InputText";
import PageHeader from "../Layout/PageHeader";
import ErrorPage from "../ErrorPage";
import SpecialityActions from "../../../store/actions/SpecialityActions";

const SpecialityForm = ({ isEditor = false }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    // @ts-ignore
    const { id } = useParams();
    // @ts-ignore
    const speciality = useSelector((state) => state.speciality.item);
    // @ts-ignore
    const isLoading = useSelector((state) => state.speciality.isLoadingItem);
    // @ts-ignore
    const error = useSelector((state) => state.speciality.itemError);

    useEffect(() => {
        if (isEditor) {
            dispatch(SpecialityActions.get(id));
        }
    }, []);

    if (isEditor && isLoading) {
        return null;
    }

    if (isEditor && error) {
        return <ErrorPage message={error} />;
    }

    const onSuccess = () => {
        history.push("/dashboard/especialidades");
    };

    const handleSubmit = (data) => {
        if (isEditor) {
            dispatch(SpecialityActions.update(data.id, data, onSuccess));
        } else {
            dispatch(SpecialityActions.create(data, onSuccess));
        }
    };

    const handleCancel = () => {
        history.goBack();
    };

    return (
        <>
            <PageHeader
                title={`${isEditor ? "Editar" : "Crear"} Especialidad`}
                description={`Utilice el formulario para ${
                    isEditor ? "editar la" : "crear una nueva"
                } area de emprendimiento`}
                icon={<MdWorkOutline />}
            />

            <div className="row">
                <div className="col-md-8">
                    <GenericFormCard
                        formData={isEditor && speciality}
                        onSubmit={handleSubmit}
                        onCancel={handleCancel}
                    >
                        <InputText id="etiqueta" label="Etiqueta"></InputText>
                        <InputText
                            id="descripcion"
                            label="Descripci??n"
                        ></InputText>
                    </GenericFormCard>
                </div>
            </div>
        </>
    );
};

export default SpecialityForm;
