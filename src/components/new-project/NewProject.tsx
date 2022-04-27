import { FC, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { AppContext } from "../../App";
import validation from "../../utils/validation";
import ValidationMessage from "../validation-message";

const NewProject: FC = () => {
  const { dispatch } = useContext(AppContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { rankingId } = useParams();

  const createProject = (project) => {
    dispatch({
      type: "CREATE_PROJECT",
      project: project,
      rankingId: parseInt(rankingId),
    });

    reset();
  };

  const pattern = /^[0-9]*$/i;

  return (
    <div>
      <h1 className="fs-4 font-weight-normal pt-1">Novo Projeto</h1>
      <div className="d-flex align-items-start flex-wrap gap-5 pb-4 ">
        <Form onSubmit={handleSubmit(createProject)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nome do projeto</Form.Label>
            <Form.Control
              {...register("Nome", {
                required: {
                  value: true,
                  message: validation.isNecessary("Nome"),
                },
                minLength: { value: 5, message: validation.tooShort("Nome") },
                maxLength: { value: 15, message: validation.tooLong("Nome") },
              })}
              type="text"
              placeholder="Ex: Projeto 1"
            />

            {errors.Nome && (
              <ValidationMessage>{errors.Nome.message}</ValidationMessage>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Impacto na função fim da UFPE</Form.Label>
            <Form.Control
              {...register("CriterioA", {
                required: {
                  value: true,
                  message: validation.isNecessary("critério"),
                },
                pattern: {
                  value: pattern,
                  message: validation.errorRegex,
                },
                valueAsNumber: true,
              })}
              type="number"
              placeholder="Critério A"
            />
            {errors.CriterioA && (
              <ValidationMessage>{errors.CriterioA.message}</ValidationMessage>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              Risco de segurança dos usuários das instalações
            </Form.Label>
            <Form.Control
              {...register("CriterioB", {
                required: {
                  value: true,
                  message: validation.isNecessary("critério"),
                },
                pattern: { value: pattern, message: validation.errorRegex },
                valueAsNumber: true,
              })}
              type="number"
              placeholder="Critério B"
            />
            {errors.CriterioB && (
              <ValidationMessage>{errors.CriterioB.message}</ValidationMessage>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Risco patrimonial</Form.Label>
            <Form.Control
              {...register("CriterioC", {
                required: {
                  value: true,
                  message: validation.isNecessary("critério"),
                },
                pattern: { value: pattern, message: validation.errorRegex },
                valueAsNumber: true,
              })}
              type="number"
              placeholder="Critério C"
            />
            {errors.CriterioC && (
              <ValidationMessage>{errors.CriterioC.message}</ValidationMessage>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              O projeto já foi apresentado outras vezes para desenvolvimento?
            </Form.Label>
            <Form.Control
              {...register("CriterioD", {
                required: {
                  value: true,
                  message: validation.isNecessary("critério"),
                },
                pattern: { value: pattern, message: validation.errorRegex },
                valueAsNumber: true,
              })}
              type="number"
              placeholder="Critério D"
            />
            {errors.CriterioD && (
              <ValidationMessage>{errors.CriterioD.message}</ValidationMessage>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              Porcentagem de recurso disponível para construção
            </Form.Label>
            <Form.Control
              {...register("CriterioE", {
                required: {
                  value: true,
                  message: validation.isNecessary("critério"),
                },
                pattern: { value: pattern, message: validation.errorRegex },
                valueAsNumber: true,
              })}
              type="number"
              placeholder="Critério E"
            />
            {errors.CriterioE && (
              <ValidationMessage>{errors.CriterioE.message}</ValidationMessage>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Planejamento de manutenção</Form.Label>
            <Form.Control
              {...register("CriterioF", {
                required: {
                  value: true,
                  message: validation.isNecessary("critério"),
                },
                pattern: { value: pattern, message: validation.errorRegex },
                valueAsNumber: true,
              })}
              type="number"
              placeholder="Critério F"
            />
            {errors.CriterioF && (
              <ValidationMessage>{errors.CriterioF.message}</ValidationMessage>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Prazo para entrar em licitação</Form.Label>
            <Form.Control
              {...register("CriterioG", {
                required: {
                  value: true,
                  message: validation.isNecessary("critério"),
                },
                pattern: { value: pattern, message: validation.errorRegex },
                valueAsNumber: true,
              })}
              type="number"
              placeholder="Critério G"
            />
            {errors.CriterioG && (
              <ValidationMessage>{errors.CriterioG.message}</ValidationMessage>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Custo estimado do ciclo de vida</Form.Label>
            <Form.Control
              {...register("CriterioH", {
                required: {
                  value: true,
                  message: validation.isNecessary("critério"),
                },
                pattern: { value: pattern, message: validation.errorRegex },
                valueAsNumber: true,
              })}
              type="number"
              placeholder="Critério H"
            />
            {errors.CriterioH && (
              <ValidationMessage>{errors.CriterioH.message}</ValidationMessage>
            )}
          </Form.Group>

          <Button variant="danger" type="submit" className="px-4 py-2">
            Registrar
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default NewProject;
