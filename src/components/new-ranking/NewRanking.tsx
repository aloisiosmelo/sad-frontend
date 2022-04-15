import { FC } from "react";
import { Form, Button } from "react-bootstrap";


const NewRanking: FC = () => {

    return (
        <div>
            <h1 className="fs-4 font-weight-normal">Novo Ranking</h1>
            <div className="d-flex align-items-start flex-wrap gap-5">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Título do ranking</Form.Label>
                        <Form.Control type="text" placeholder="ranking" />
                        <Form.Text className="text-muted">
                        Insira um nome que represente o ranking que irá criar
                        </Form.Text>
                    </Form.Group>
                    <Button variant="danger" type="submit">
                        Registrar
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default NewRanking