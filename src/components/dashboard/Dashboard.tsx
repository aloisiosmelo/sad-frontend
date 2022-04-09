import Table from '../table';
import React, { Fragment,useState } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { BsFillTrashFill,BsFillPlusSquareFill } from "react-icons/bs";



type Projeto = {
    nome: string
    a: number
    b: number
    c: number
    d: number
    e: number
    f: number
    g: number
    h: number    
}
  
const defaultData: Projeto[] = [
    {
      nome: 'projeto a',
      a: 27,
      b: 27,
      c: 27,
      d: 27,
      e: 27,
      f: 27,
      g: 27,
      h: 27, 
    },
]





export default function Dashboard(){

    const [projeto, setProjeto] = useState(defaultData);
   
    


    const data = React.useMemo(
        () => [
          {
            col1: 'Nome',
            col2: 'a',
            col3: 'b',
            col4: 'c',
            col5: 'd',
            col6: 'e',
            col7: 'f',
            col8: 'g',
            col9: 'h',
          },
        ],
        []
      )
   
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
        ],
        []
    )

  const [inputList, setInputList] = useState([{ 
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
 
  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
 
  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };
 
  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, {
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
  };
   
    return(
        <Container>
            <Row>
                <Col lg="4"> 
                    <Form.Group controlId="formBasicnome">
                            <Form.Label>Nome do projeto</Form.Label>
                            <Form.Control type="text" placeholder="Enter nome" />
                            <Form.Text className="text-muted">
                                Digite o nome do projeto
                            </Form.Text>
                        </Form.Group>
                </Col>

                <Col>
                    <Form.Group controlId="formBasicA">
                        <Form.Label>A</Form.Label>
                        <Form.Control type="text" placeholder="A" />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group controlId="formBasicB">
                        <Form.Label>B</Form.Label>
                        <Form.Control type="text" placeholder="B" />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group controlId="formBasicC">
                        <Form.Label>C</Form.Label>
                        <Form.Control type="text" placeholder="C" />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group controlId="formBasicD">
                        <Form.Label>D</Form.Label>
                        <Form.Control type="text" placeholder="D" />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group controlId="formBasicE">
                        <Form.Label>E</Form.Label>
                        <Form.Control type="text" placeholder="E" />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group controlId="formBasicF">
                        <Form.Label>F</Form.Label>
                        <Form.Control type="text" placeholder="F" />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group controlId="formBasicG">
                        <Form.Label>G</Form.Label>
                        <Form.Control type="text" placeholder="G" />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group controlId="formBasicH">
                        <Form.Label>H</Form.Label>
                        <Form.Control type="text" placeholder="H" />
                    </Form.Group>
                </Col>

                <Col>
                    <Button className='bt-action' variant="danger"><BsFillTrashFill/></Button>
                    <Button className='bt-action' variant="success"><BsFillPlusSquareFill/></Button>
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

/*


   <div>
            <div>
            <h3><a href="https://cluemediator.com">Clue Mediator</a></h3>
            {inputList.map((x, i) => {
                return (
                <div className="box">
                    <input
                    name="firstName"
        placeholder="Enter First Name"
                    value={x.firstName}
                    onChange={e => handleInputChange(e, i)}
                    />
                    <input
                    className="ml10"
                    name="lastName"
        placeholder="Enter Last Name"
                    value={x.lastName}
                    onChange={e => handleInputChange(e, i)}
                    />
                    <div className="btn-box">
                    {inputList.length !== 1 && <button
                        className="mr10"
                        onClick={() => handleRemoveClick(i)}>Remove</button>}
                    {inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
                    </div>
                </div>
                );
            })}
      <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
            </div>
            <Table data={data} columns={columns} />
        </div>

*/