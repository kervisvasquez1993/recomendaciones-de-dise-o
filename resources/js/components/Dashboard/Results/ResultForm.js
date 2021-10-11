import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import GenericFormCard from "../Form/GenericFormCard";
import InputText from "../Form/InputText";
import PageHeader from "../Layout/PageHeader";
import ErrorPage from "../ErrorPage";
import { BASE_PATH } from "./ResultList";
import { FaClipboardCheck } from "react-icons/fa";
import ResultActions from "../../../store/actions/ResultActions";
import InputSelect from "../Form/InputSelect";
import { getSpecialities } from "../../../store/actions/specialityActions";
import { getStyles } from "../../../store/actions/styleActions";
import LogoTypeActions from "../../../store/actions/LogoTypeActions";
import IllustrationActions from "../../../store/actions/IllustrationActions";
import { relativePathToS3 } from "../../../utils";
import InputColors from "../Form/InputColors";
import FontActions from "../../../store/actions/fontActions";

const ResultForm = ({ isEditor = false }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    // @ts-ignore
    const { id } = useParams();
    // @ts-ignore
    const data = useSelector((state) => state.result.item);
    // @ts-ignore
    const isLoading = useSelector((state) => state.result.isLoadingItem);
    // @ts-ignore
    const error = useSelector((state) => state.result.itemError);

    // @ts-ignore
    const specialities = useSelector((state) => state.speciality.list);
    // @ts-ignore
    const styles = useSelector((state) => state.style.list);
    // @ts-ignore
    const logoTypes = useSelector((state) => state.logoType.list);
    // @ts-ignore
    const illustrations = useSelector((state) => state.illustration.list);
    // @ts-ignore
    const fonts = useSelector((state) => state.font.list);

    const [ilustrationId, setIlustrationId] = useState(null);

    useEffect(() => {
        dispatch(getSpecialities());
        dispatch(getStyles());
        dispatch(LogoTypeActions.getList());
        dispatch(IllustrationActions.getList());
        dispatch(FontActions.getList());

        if (isEditor) {
            dispatch(ResultActions.get(id));
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
            dispatch(ResultActions.update(id, data, onSuccess));
        } else {
            dispatch(ResultActions.create(data, onSuccess));
        }
    };

    const handleAfterChange = (data) => {
        setIlustrationId(data.ilustracion_id);
    };

    const handleCancel = () => {
        history.goBack();
    };

    const ilustration = illustrations.find(
        (item) => item.id === Number(ilustrationId)
    );

    const ilustrationPreview = ilustration && (
        <img
            className="form-img"
            src={relativePathToS3(ilustration.src)}
            alt={ilustration.nombre}
        />
    );

    const beforeInitData = (data) => {
        if (isEditor && data.fuentes) {
            data.fuentes = [...data.fuentes.values()].map((item) => item.id);
        }
        return data;
    };

    return (
        <>
            <PageHeader
                title={`${isEditor ? "Editar" : "Crear"} Resultado`}
                description={`Utilice el formulario para ${
                    isEditor ? "editar el" : "crear un nuevo"
                }  resultado`}
                icon={<FaClipboardCheck />}
            />

            <div className="row">
                <div className="col-md-8">
                    <GenericFormCard
                        formData={isEditor && data}
                        onSubmit={handleSubmit}
                        onCancel={handleCancel}
                        afterChange={handleAfterChange}
                        beforeInitData={beforeInitData}
                    >
                        <InputSelect id="especialidad_id" label="Especialidad">
                            {specialities.map((item) => (
                                <option key={item.id} value={item.id}>
                                    {item.etiqueta}
                                </option>
                            ))}
                        </InputSelect>

                        <InputSelect id="estilo_id" label="Estilo">
                            {styles.map((item) => (
                                <option key={item.id} value={item.id}>
                                    {item.etiqueta}
                                </option>
                            ))}
                        </InputSelect>

                        <InputSelect id="fuentes" label="Fuente" multiple>
                            {fonts.map((item) => (
                                <option key={item.id} value={item.id}>
                                    {item.nombre}
                                </option>
                            ))}
                        </InputSelect>

                        <InputColors
                            id="colores"
                            label="Colores"
                            colors={
                                (isEditor && data && data.colores) || ["#fff"]
                            }
                        />

                        <InputText
                            id="descripcion"
                            label="Descripción"
                        ></InputText>

                        <InputSelect id="logotipo_id" label="Tipo de Logotipo">
                            {logoTypes.map((item) => (
                                <option key={item.id} value={item.id}>
                                    {item.nombre}
                                </option>
                            ))}
                        </InputSelect>
                        <InputSelect
                            id="ilustracion_id"
                            label="Ilustración"
                            after={ilustrationPreview}
                        >
                            {illustrations.map((item) => (
                                <option key={item.id} value={item.id}>
                                    {item.nombre}
                                </option>
                            ))}
                        </InputSelect>
                    </GenericFormCard>
                </div>
            </div>
        </>
    );
};

export default ResultForm;
