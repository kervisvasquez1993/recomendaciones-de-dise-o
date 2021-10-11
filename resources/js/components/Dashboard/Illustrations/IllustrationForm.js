import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import GenericFormCard from "../Form/GenericFormCard";
import InputText from "../Form/InputText";
import PageHeader from "../Layout/PageHeader";
import ErrorPage from "../ErrorPage";
import { BASE_PATH } from "./IllustrationList";
import InputDropzone from "../Form/InputDropzone";
import IllustrationActions from "../../../store/actions/IllustrationActions";
import { AiFillFileImage } from "react-icons/ai";

const IllustrationForm = ({ isEditor = false }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    // @ts-ignore
    const { id } = useParams();
    // @ts-ignore
    const data = useSelector((state) => state.illustration.item);
    // @ts-ignore
    const isLoading = useSelector((state) => state.illustration.isLoadingItem);
    // @ts-ignore
    const error = useSelector((state) => state.illustration.itemError);

    useEffect(() => {
        if (isEditor) {
            dispatch(IllustrationActions.get(id));
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
            dispatch(IllustrationActions.update(id, formData, onSuccess, true));
        } else {
            dispatch(IllustrationActions.create(formData, onSuccess));
        }
    };

    const handleCancel = () => {
        history.goBack();
    };

    return (
        <>
            <PageHeader
                title={`${isEditor ? "Editar" : "Crear"} Ilustración`}
                description={`Utilice el formulario para ${
                    isEditor ? "editar la" : "crear una nueva"
                }  ilustración`}
                icon={<AiFillFileImage />}
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
                        <InputDropzone
                            id="src"
                            label="Imagen"
                            options={{ accept: "image/*", maxFiles: 1 }}
                            dropzoneMessage="Arrastre una imagen o haga clic aquí para buscarla"
                        />
                    </GenericFormCard>
                </div>
            </div>
        </>
    );
};

export default IllustrationForm;
