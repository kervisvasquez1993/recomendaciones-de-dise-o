import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import GenericFormCard from "../Form/GenericFormCard";
import InputText from "../Form/InputText";
import PageHeader from "../Layout/PageHeader";
import ErrorPage from "../ErrorPage";
import {
    createStyle,
    getStyle,
    updateStyle,
} from "../../../store/actions/styleActions";
import { RiPaintBrushFill } from "react-icons/ri";

const StyleForm = ({ isEditor = false }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    // @ts-ignore
    const { id } = useParams();
    // @ts-ignore
    const data = useSelector((state) => state.style.item);
    // @ts-ignore
    const isLoading = useSelector((state) => state.style.isLoadingItem);
    // @ts-ignore
    const error = useSelector((state) => state.style.itemError);

    useEffect(() => {
        if (isEditor) {
            dispatch(getStyle(id));
        }
    }, []);

    if (isEditor && isLoading) {
        return null;
    }

    if (isEditor && error) {
        return <ErrorPage message={error} />;
    }

    const onSuccess = () => {
        history.push("/dashboard/estilos");
    };

    const handleSubmit = (data) => {
        if (isEditor) {
            dispatch(updateStyle(data, onSuccess));
        } else {
            dispatch(createStyle(data, onSuccess));
        }
    };

    const handleCancel = () => {
        history.goBack();
    };

    return (
        <>
            <PageHeader
                title={`${isEditor ? "Editar" : "Crear"} Estilo`}
                description={`Utilice el formulario para ${
                    isEditor ? "editar el" : "crear un nuevo"
                }  estilo de logotipo`}
                icon={<RiPaintBrushFill />}
            />

            <div className="row">
                <div className="col-md-8">
                    <GenericFormCard
                        formData={isEditor && data}
                        onSubmit={handleSubmit}
                        onCancel={handleCancel}
                    >
                        <InputText id="etiqueta" label="Etiqueta"></InputText>
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

export default StyleForm;
