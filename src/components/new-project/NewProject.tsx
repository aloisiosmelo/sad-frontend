import { FC, useContext, useState } from "react";
import { Form, Button, ButtonGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { AppContext } from "../../App";
import InputMask from "react-input-mask";
import { Formik, Form as FormikForm, Field } from "formik";
import InputNumber from "react-number-format";
import * as Yup from "yup";
import ValidationMessage from "../validation-message";

const RemoveFormat = (value) => {
  return parseInt(
    value
      .split("")
      .filter((char) => char >= "0" && char <= "9")
      .join("")
  );
};

const messageForPositiveAndInteger = "O valor deve ser um inteiro positivo";
const messageForMandatoryField = "O preenchimento deste campo é obrigatório";

const NewProjectSchema = Yup.object().shape({
  Nome: Yup.string()
    .required("Um nome é necessário")
    .min(5, "Insira um título de 5 a 20 caractéres"),
  CriterioA: Yup.number().required("O preenchimento deste campo é obrigatório"),
  CriterioB: Yup.number()
    .required(messageForMandatoryField)
    .positive(messageForPositiveAndInteger)
    .integer(messageForPositiveAndInteger),
  CriterioC: Yup.number()
    .required(messageForMandatoryField)
    .positive(messageForPositiveAndInteger)
    .integer(messageForPositiveAndInteger),
  CriterioD: Yup.number()
    .required(messageForMandatoryField)
    .positive(messageForPositiveAndInteger)
    .integer(messageForPositiveAndInteger),
  CriterioE: Yup.number()
    .required(messageForMandatoryField)
    .positive(messageForPositiveAndInteger)
    .integer(messageForPositiveAndInteger),
  CriterioF: Yup.number()
    .required(messageForMandatoryField)
    .positive(messageForPositiveAndInteger)
    .integer(messageForPositiveAndInteger),
  CriterioG: Yup.number()
    .required(messageForMandatoryField)
    .positive(messageForPositiveAndInteger)
    .integer(messageForPositiveAndInteger),
  CriterioH: Yup.string().required(messageForMandatoryField),
});

const NewProject: FC = () => {
  const { dispatch, state } = useContext(AppContext);
  const { rankingId } = useParams();

  const createProject = (project) => {
    dispatch({
      type: "CREATE_PROJECT",
      project: project,
      rankingId: parseInt(rankingId),
    });
  };

  const pattern = /^[0-9]*$/i;

  return (
    <div>
      <h1 className="fs-4 font-weight-normal pt-1">Novo Projeto</h1>
      <div className="d-flex align-items-start flex-wrap gap-5 pb-4 ">
        <Formik
          initialValues={{
            Nome: "",
            CriterioA: "",
            CriterioB: "",
            CriterioC: "",
            CriterioD: "",
            CriterioE: "",
            CriterioF: "",
            CriterioG: "",
            CriterioH: "",
          }}
          onSubmit={(value) => {
            const project = {
              ...value,
              CriterioH: RemoveFormat(value.CriterioH),
            };
            createProject(project);
          }}
          validationSchema={NewProjectSchema}
        >
          {({ errors, touched }) => (
            <FormikForm>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nome do projeto</Form.Label>
                <Field as={Form.Control} name="Nome" />
                {errors.Nome && touched.Nome ? (
                  <ValidationMessage>{errors.Nome}</ValidationMessage>
                ) : null}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Impacto na função fim da UFPE</Form.Label>
                <Field as={Form.Control} name="CriterioA" type="number" />
                {errors.CriterioA && touched.CriterioA ? (
                  <ValidationMessage>{errors.CriterioA}</ValidationMessage>
                ) : null}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>
                  Risco de segurança dos usuários das instalaçõe
                </Form.Label>
                <Field as={Form.Control} name="CriterioB" type="number" />
                {errors.CriterioB && touched.CriterioB ? (
                  <ValidationMessage>{errors.CriterioB}</ValidationMessage>
                ) : null}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Risco patrimonial</Form.Label>
                <Field as={Form.Control} name="CriterioC" type="number" />
                {errors.CriterioC && touched.CriterioC ? (
                  <ValidationMessage>{errors.CriterioC}</ValidationMessage>
                ) : null}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>
                  O projeto já foi apresentado outras vezes para
                  desenvolvimento?
                </Form.Label>
                <Field as={Form.Control} name="CriterioD" type="number" />
                {errors.CriterioD && touched.CriterioD ? (
                  <ValidationMessage>{errors.CriterioD}</ValidationMessage>
                ) : null}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>
                  Porcentagem de recurso disponível para construção.
                </Form.Label>
                <Field as={Form.Control} name="CriterioE" type="number" />
                {errors.CriterioE && touched.CriterioE ? (
                  <ValidationMessage>{errors.CriterioE}</ValidationMessage>
                ) : null}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Planejamento da manutenção.</Form.Label>
                <Field as={Form.Control} name="CriterioF" type="number" />
                {errors.CriterioF && touched.CriterioF ? (
                  <ValidationMessage>{errors.CriterioF}</ValidationMessage>
                ) : null}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Prazo para entrar em licitação</Form.Label>
                <Field as={Form.Control} name="CriterioG" type="number" />
                {errors.CriterioG && touched.CriterioG ? (
                  <ValidationMessage>{errors.CriterioG}</ValidationMessage>
                ) : null}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Custo estimado do ciclo de vida(R$)</Form.Label>
                <Field
                  as={InputNumber}
                  name="CriterioH"
                  customInput={Form.Control}
                  thousandSeparator={true}
                />
                {errors.CriterioH && touched.CriterioH ? (
                  <ValidationMessage>{errors.CriterioH}</ValidationMessage>
                ) : null}
              </Form.Group>

              <ButtonGroup size="lg" className="mb-4">
                <Button variant="danger" className="px-3" type="submit">
                  Registrar
                </Button>
              </ButtonGroup>
            </FormikForm>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default NewProject;
