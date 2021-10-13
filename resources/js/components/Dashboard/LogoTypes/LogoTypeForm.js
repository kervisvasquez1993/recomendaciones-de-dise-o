import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import GenericFormCard from "../Form/GenericFormCard";
import InputText from "../Form/InputText";
import PageHeader from "../Layout/PageHeader";
import ErrorPage from "../ErrorPage";
import { BASE_PATH } from "./LogoTypeList";
import LogoTypeActions from "../../../store/actions/LogoTypeActions";
import { FaPencilAlt } from "react-icons/fa";

const LogoTypeForm = ({ isEditor = false }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    // @ts-ignore
    const { id } = useParams();
    // @ts-ignore
    const data = useSelector((state) => state.logoType.item);
    // @ts-ignore
    const isLoading = useSelector((state) => state.logoType.isLoadingItem);
    // @ts-ignore
    const error = useSelector((state) => state.logoType.itemError);

    useEffect(() => {
        if (isEditor) {
            dispatch(LogoTypeActions.get(id));
        }
    }, []);

    if (isEditor && isLoading) {
        return null;
    }

    if (isEditor && error) {
        return <ErrorPage message={error} />;
    }

    const onSuccess = () => {
        history.push(`/dashboard/${BASE_PATH}`);
    };

    const handleSubmit = (data, formData) => {
        if (isEditor) {
            dispatch(LogoTypeActions.update(id, data, onSuccess));
        } else {
            dispatch(LogoTypeActions.create(data, onSuccess));
        }
    };

    const handleCancel = () => {
        history.goBack();
    };

    return (
        <>
            <PageHeader
                title={`${isEditor ? "Editar" : "Crear"} Logotipo`}
                description={`Utilice el formulario para ${
                    isEditor ? "editar el" : "crear un nuevo"
                }  tipo de logotipo`}
                icon={<FaPencilAlt />}
            />

            <div className="row">
                <div className="col-md-8">
                    <GenericFormCard
                        formData={isEditor && data}
                        onSubmit={handleSubmit}
                        onCancel={handleCancel}
                    >
                        <InputText id="nombre" label="Nombre"></InputText>
                        <InputText
                            id="descripcion"
                            label="Descripción"
                        ></InputText>
                    </GenericFormCard>
                </div>
            </div>
        </>
    );
};

export default LogoTypeForm;
