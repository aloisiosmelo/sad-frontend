import { FC } from "react";
import { Form, Button } from "react-bootstrap";



const NewProject: FC = () => {


    return (
        <div>
            <h1 className="fs-4 font-weight-normal pt-1">Novo Projeto</h1>
            <div className="d-flex align-items-start flex-wrap gap-5 pb-4">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Impacto na função fim da UFPE</Form.Label>
                        <Form.Control type="text" placeholder="ranking" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Risco de segurança dos usuários das instalações</Form.Label>
                        <Form.Control type="text" placeholder="ranking" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Risco patrimonial</Form.Label>
                        <Form.Control type="text" placeholder="ranking" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>O projeto já foi apresentado outras vezes para desenvolvimento?</Form.Label>
                        <Form.Control type="text" placeholder="ranking" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Porcentagem de recurso disponível para construção</Form.Label>
                        <Form.Control type="text" placeholder="ranking" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Planejamento de manutenção</Form.Label>
                        <Form.Control type="text" placeholder="ranking" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Prazo para entrar em licitação</Form.Label>
                        <Form.Control type="text" placeholder="ranking" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Custo estimado do ciclo de vida</Form.Label>
                        <Form.Control type="text" placeholder="ranking" />
                    </Form.Group>
                    
                    <Button variant="danger" type="submit">
                        Registrar
                    </Button>
                </Form>
            </div>
        </div>
    )


}

export default NewProject;