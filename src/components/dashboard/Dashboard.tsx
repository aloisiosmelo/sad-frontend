import Table from '../table';
import React, { useState, useEffect } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { BsFillTrashFill,BsFillPlusSquareFill } from "react-icons/bs";
import './Dashboard.style.css';

export default function Dashboard(){
  
    const [data, setData] = useState([]);
    const [currentInputProject, setCurrentInputProject] = useState([{ 
        nome: "", 
        a: "",
        b: "",
        c: "",
        d: "",
        e: "",
        f: "",
        g: "",
        h: ""
      }]);
   
    const columns = React.useMemo(
        () => [
            {
                Header: 'Nome',
                accessor: 'col1',
            },
            {
                Header: 'A',
                accessor: 'col2',
            },
            {
                Header: 'B',
                accessor: 'col3',
            },
            {
                Header: 'C',
                accessor: 'col4',
            },
            {
                Header: 'D',
                accessor: 'col5',
            },
            {
                Header: 'E',
                accessor: 'col6',
            },
            {
                Header: 'F',
                accessor: 'col7',
            },
            {
                Header: 'G',
                accessor: 'col8',
            },
            {
                Header: 'H',
                accessor: 'col9',
            },
            {
                Header: 'Actions',
                accessor: 'col10',
                Cell: (props) => {
                    return (<Button className="actionButton" onClick={() => handleRemoveClick(props.index)} variant="danger"><BsFillTrashFill onClick={() => handleRemoveClick(props.index)} /></Button>)
                }
            },
        ],
        [data]
    )

  // handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    currentInputProject[name] = value;
    setCurrentInputProject(currentInputProject);
  };
 
  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const reducedArr = [...data];
    reducedArr.splice(index, 1);
    setData(reducedArr);
  };
  
 
  // handle click event of the Add button
  const handleAddClick = () => {
    setData(
        [...data, {
            col1: currentInputProject['nome'],
            col2: currentInputProject['a'],
            col3: currentInputProject['b'],
            col4: currentInputProject['c'],
            col5: currentInputProject['d'],
            col6: currentInputProject['e'],
            col7: currentInputProject['f'],
            col8: currentInputProject['g'],
            col9: currentInputProject['h'],
         }]
       );
  };

  useEffect(() => {
    console.log(data)
  }, [data]);

    return(
        <Container>
            <Row>
                <Col lg="4"> 
                    <Form.Group controlId="formBasicnome">
                            <Form.Label>Nome do projeto</Form.Label>
                            <Form.Control type="text" onChange={handleInputChange} name="nome" placeholder="Digite o nome do projeto" />
                        </Form.Group>
                </Col>

                <Col>
                    <Form.Group controlId="formBasicA">
                        <Form.Label>A</Form.Label>
                        <Form.Control onChange={handleInputChange} name="a" type="text" placeholder="A" />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group controlId="formBasicB">
                        <Form.Label>B</Form.Label>
                        <Form.Control type="text" onChange={handleInputChange} name="b" placeholder="B" />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group controlId="formBasicC">
                        <Form.Label>C</Form.Label>
                        <Form.Control type="text" onChange={handleInputChange} name="c" placeholder="C" />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group controlId="formBasicD">
                        <Form.Label>D</Form.Label>
                        <Form.Control type="text" onChange={handleInputChange} name="d" placeholder="D" />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group controlId="formBasicE">
                        <Form.Label>E</Form.Label>
                        <Form.Control type="text" onChange={handleInputChange} name="e" placeholder="E" />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group controlId="formBasicF">
                        <Form.Label>F</Form.Label>
                        <Form.Control type="text" onChange={handleInputChange} name="f" placeholder="F" />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group controlId="formBasicG">
                        <Form.Label>G</Form.Label>
                        <Form.Control type="text" onChange={handleInputChange} name="g" placeholder="G" />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group controlId="formBasicH">
                        <Form.Label>H</Form.Label>
                        <Form.Control type="text" onChange={handleInputChange} name="h" placeholder="H" />
                    </Form.Group> 
                </Col>

                <Col lg="2">
                    <Button onClick={handleAddClick} className="actionButton" variant="success"><BsFillPlusSquareFill/> Adicionar</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table data={data} columns={columns} />
                </Col>
            </Row>
        </Container>
        
    )
}