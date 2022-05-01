import { FC, useContext, useState } from "react";
import { Form, Button, ButtonGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { AppContext } from "../../App";
import InputMask from "react-input-mask";
import { Formik, Form as FormikForm, Field } from "formik";
import InputNumber from "react-number-format";

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
            createProject(value);
          }}
        >
          <FormikForm>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nome do projeto</Form.Label>
              <Field as={Form.Control} name="Nome" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Impacto na função fim da UFPE</Form.Label>
              <Field as={Form.Control} name="CriterioA" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                Risco de segurança dos usuários das instalaçõe
              </Form.Label>
              <Field as={Form.Control} name="CriterioB" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Risco patrimonial</Form.Label>
              <Field as={Form.Control} name="CriterioC" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                O projeto já foi apresentado outras vezes para desenvolvimento?
              </Form.Label>
              <Field as={Form.Control} name="CriterioD" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                Porcentagem de recurso disponível para construção.
              </Form.Label>
              <Field as={Form.Control} name="CriterioE" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Planejamento da manutenção.</Form.Label>
              <Field as={Form.Control} name="CriterioF" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Prazo para entrar em licitação</Form.Label>
              <Field as={Form.Control} name="CriterioG" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Custo estimado do ciclo de vida(R$)</Form.Label>
              <Field
                as={InputNumber}
                name="CriterioH"
                customInput={Form.Control}
                thousandSeparator={true}
              />
            </Form.Group>

            <ButtonGroup size="lg" className="mb-4">
              <Button variant="danger" className="px-3" type="submit">
                Registrar
              </Button>
            </ButtonGroup>
          </FormikForm>
        </Formik>
      </div>
    </div>
  );
};

export default NewProject;
