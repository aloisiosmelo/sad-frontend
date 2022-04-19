import { FC, useState } from 'react';
import { Button, Row, Col, Modal, Form, ButtonGroup } from 'react-bootstrap';
import { X } from 'react-bootstrap-icons';
import { useNavigate, } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../../App';

const Ranking: FC = ({ranking}) => {

    const { dispatch } = useContext(AppContext)
    const navigate = useNavigate()

    const goToRankingDetails = () => navigate(`/dashboard/ranking-detail/ranking/${ranking.rankingId}`)
    const deleteRanking = () => dispatch({type: 'REMOVE_RANKING', rankingId: ranking.rankingId})
    // const modalBody = (id) => {
    //     return (
    //         <Row> 
    //             <Col lg="8">
    //                 <Form>
    //                     <Form.Group className="mb-3" controlId="formNome">
    //                         <Form.Label>Nome do projeto</Form.Label>
    //                         <Form.Control type="text" name="nome" placeholder="Impactos da função fim da UFPE" />
    //                     </Form.Group>

    //                     <Form.Group className="mb-3" controlId="formA">
    //                         <Form.Label>Impactos da função fim da UFPE</Form.Label>
    //                         <Form.Control type="text" name="a" placeholder="A" />
    //                     </Form.Group>

    //                     <Form.Group className="mb-3" controlId="formA">
    //                         <Form.Label>Impactos da função fim da UFPE</Form.Label>
    //                         <Form.Control type="text" name="b" placeholder="B" />
    //                     </Form.Group>

    //                     <Form.Group className="mb-3" controlId="formA">
    //                         <Form.Label>Impactos da função fim da UFPE</Form.Label>
    //                         <Form.Control type="text" name="c" placeholder="C" />
    //                     </Form.Group>

    //                     <Form.Group className="mb-3" controlId="formA">
    //                         <Form.Label>Impactos da função fim da UFPE</Form.Label>
    //                         <Form.Control type="text" name="d" placeholder="D" />
    //                     </Form.Group>

    //                     <Form.Group className="mb-3" controlId="formA">
    //                         <Form.Label>Impactos da função fim da UFPE</Form.Label>
    //                         <Form.Control type="text" name="e" placeholder="E" />
    //                     </Form.Group>

    //                     <Form.Group className="mb-3" controlId="formA">
    //                         <Form.Label>Impactos da função fim da UFPE</Form.Label>
    //                         <Form.Control type="text" name="f" placeholder="F" />
    //                     </Form.Group>

    //                     <Form.Group className="mb-3" controlId="formA">
    //                         <Form.Label>Impactos da função fim da UFPE</Form.Label>
    //                         <Form.Control type="text" name="g" placeholder="G" />
    //                     </Form.Group>

    //                     <Form.Group className="mb-3" controlId="formA">
    //                         <Form.Label>Impactos da função fim da UFPE</Form.Label>
    //                         <Form.Control type="text" name="h" placeholder="H" />
    //                     </Form.Group>

    //                 </Form>
    //                 <ButtonGroup size="lg" className="mb-4">
    //                     <Button variant="danger" onClick={goToRankingDetails}>
    //                         Salvar
    //                     </Button>
    //                 </ButtonGroup>
    //             </Col>
    //         </Row>
    //     )
    //   };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="d-flex flex-column bg-danger p-3 rounded text-white justify-content-start align-items-start" >
            <X onClick={deleteRanking} style={{height: '30px', width: '30px'}} className="align-self-end"/>
            <span className="font-weight-bold fs-5">{ranking.title}</span>
          
            <p className="fs-7">
                Criado em {ranking.date}
            </p>

            <Button onClick={goToRankingDetails} variant="light">Abrir</Button>

            {/* <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {modalBody(1)}
                </Modal.Body>
            </Modal> */}
        </div>
    );
}

export default Ranking;