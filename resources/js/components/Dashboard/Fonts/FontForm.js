import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import GenericFormCard from "../Form/GenericFormCard";
import InputText from "../Form/InputText";
import PageHeader from "../Layout/PageHeader";
import ErrorPage from "../ErrorPage";
import { BASE_PATH } from "./FontList";
import InputDropzone from "../Form/InputDropzone";
import FontActions from "../../../store/actions/fontActions";
import { AiOutlineFontSize } from "react-icons/ai";

const FontForm = ({ isEditor = false }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    // @ts-ignore
    const { id } = useParams();
    // @ts-ignore
    const data = useSelector((state) => state.font.item);
    // @ts-ignore
    const isLoading = useSelector((state) => state.font.isLoadingItem);
    // @ts-ignore
    const error = useSelector((state) => state.font.itemError);

    useEffect(() => {
        if (isEditor) {
            // dispatch(getFont(id));
            dispatch(FontActions.get(id));
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
            // dispatch(updateFont(formData, onSuccess));
            dispatch(FontActions.update(id, formData, onSuccess, true));
        } else {
            // dispatch(createFont(formData, onSuccess));
            dispatch(FontActions.create(formData, onSuccess));
        }
    };

    const handleCancel = () => {
        history.goBack();
    };

    return (
        <>
            <PageHeader
                title={`${isEditor ? "Editar" : "Crear"} Fuente`}
                description={`Utilice el formulario para ${
                    isEditor ? "editar la" : "crear una nueva"
                }  fuente`}
                icon={<AiOutlineFontSize />}
            />

            <div className="row">
                <div className="col-md-8">
                    <GenericFormCard
                        formData={isEditor && data}
                        onSubmit={handleSubmit}
                        onCancel={handleCancel}
                    >
                        <InputText id="nombre" label="Nombre"></InputText>
                        <InputDropzone
                            id="src"
                            label="Archivo de la fuente"
                            options={{ accept: ".otf,.ttf,woff", maxFiles: 1 }}
                            dropzoneMessage="Arrastre un archivo o haga clic aquí (Formatos soportados: otf, ttf y woff)"
                        />
                    </GenericFormCard>
                </div>
            </div>
        </>
    );
};

export default FontForm;
