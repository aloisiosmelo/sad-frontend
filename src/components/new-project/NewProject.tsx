import { FC, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { AppContext } from '../../App';
import validation from "../../utils/validation";

const NewProject: FC = () => {
    const { dispatch } = useContext(AppContext);
    const { register, handleSubmit, formState: {errors} } = useForm()
    const {rankingId } = useParams()
    
    const createProject = (project) => {
        dispatch({type: 'CREATE_PROJECT', project: project, rankingId: parseInt(rankingId) })
    } 
    
    const pattern = /^[0-9]*$/i
    const errorRegex = 'São aceitos apenas números de 1 a 9'

    return (
        <div>
            <h1 className="fs-4 font-weight-normal pt-1">Novo Projeto</h1>
            <div className="d-flex align-items-start flex-wrap gap-5 pb-4 ">
                <Form onSubmit={handleSubmit(createProject)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nome do projeto</Form.Label>
                        <Form.Control 
                            {...register("Nome", 
                            { 
                                required: {value: true, message: validation.isNecessary('Nome')}, 
                                minLength: {value: 5, message: validation.tooShort('Nome')}, 
                                maxLength: {value: 15, message: validation.tooLong('Nome')}
                            })} 
                            type="text" placeholder="Critério A" />
                        
                        {errors.Nome && <p className="text-danger">{errors.Nome.message}</p>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Impacto na função fim da UFPE</Form.Label>
                        <Form.Control 
                            {
                                ...register(
                                    "CriterioA", 
                                    { 
                                        required: {value: true, message: validation.isNecessary('critério')}, 
                                        pattern: {
                                            value:pattern, 
                                            message: validation.errorRegex
                                        } 
                                    }
                                )
                            } 
                            type="text" 
                            placeholder="Critério A" />
                        {errors.CriterioA && errors.CriterioA.message }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Risco de segurança dos usuários das instalações</Form.Label>
                        <Form.Control {...register("CriterioB", { required: {value: true, message: validation.isNecessary('critério')}, pattern: {value:pattern, message: validation.errorRegex} })} type="text" placeholder="ranking" />
                        {errors.CriterioB && errors.CriterioB.message }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Risco patrimonial</Form.Label>
                        <Form.Control {...register("CriterioC", { required: {value: true, message: validation.isNecessary('critério')}, pattern: {value:pattern, message: validation.errorRegex} })} type="text" placeholder="ranking" />
                        {errors.CriterioC && errors.CriterioC.message }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>O projeto já foi apresentado outras vezes para desenvolvimento?</Form.Label>
                        <Form.Control {...register("CriterioD", { required: {value: true, message: validation.isNecessary('critério')}, pattern: {value:pattern, message: validation.errorRegex} })} type="text" placeholder="ranking" />
                        {errors.CriterioD && errors.CriterioD.message }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Porcentagem de recurso disponível para construção</Form.Label>
                        <Form.Control {...register("CriterioE", { required: {value: true, message: validation.isNecessary('critério')}, pattern: {value:pattern, message: validation.errorRegex} })} type="text" placeholder="ranking" />
                        {errors.CriterioE && errors.CriterioE.message }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Planejamento de manutenção</Form.Label>
                        <Form.Control {...register("CriterioF", { required: {value: true, message: validation.isNecessary('critério')}, pattern: {value:pattern, message: validation.errorRegex} })} type="text" placeholder="ranking" />
                        {errors.CriterioF && errors.CriterioF.message }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Prazo para entrar em licitação</Form.Label>
                        <Form.Control {...register("CriterioG", { required: {value: true, message: validation.isNecessary('critério')}, pattern: {value:pattern, message: validation.errorRegex} })} type="text" placeholder="ranking" />
                        {errors.CriterioG && errors.CriterioG.message }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Custo estimado do ciclo de vida</Form.Label>
                        <Form.Control {...register("CriterioH", { required: {value: true, message: validation.isNecessary('critério')}, pattern: {value:pattern, message: validation.errorRegex} })} type="text" placeholder="ranking" />
                        {errors.CriterioH && errors.CriterioH.message }
                    </Form.Group>
                    
                    <Button variant="danger" type="submit" className="px-4 py-2">
                        Registrar
                    </Button>
                </Form>
            </div>
        </div>
    )


}

export default NewProject;