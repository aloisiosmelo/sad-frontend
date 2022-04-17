import { FC } from "react";
import { Form, Button, ButtonGroup } from "react-bootstrap";
import * as XLSX from "xlsx";


const NewRanking: FC = () => {

    const handleFile = (e) => {
        const [file] = e.target.files;
        const reader = new FileReader();
    
        reader.onload = (evt) => {
          const bstr = evt.target.result;
          const wb = XLSX.read(bstr, { type: "binary" });
          const wsname = wb.SheetNames[0];
          const ws = wb.Sheets[wsname];
          const data = XLSX.utils.sheet_to_csv(ws);
          console.log(data);//leitura do arquivo
        };
        reader.readAsBinaryString(file);
      };

    return (
        <div>
            <h1 className="fs-4 font-weight-normal">Novo Ranking</h1>

            <div className="d-flex align-items-start flex-wrap gap-5 importar-bloco mb-4">
                <Form.Group className="mb-12" controlId="formImportar">
                        <Form.Label>Você pode importar uma planilhar ou adicionar um novo</Form.Label>
                        <Form.Control type="file" onChange={handleFile} name="importar" placeholder="Insira uma planilha" />
                </Form.Group>
            </div>
            <div className="d-flex align-items-start flex-wrap gap-5">
                <Form>
                    <Form.Group className="mb-12" controlId="formNome">
                        <Form.Label>Título do ranking</Form.Label>
                        <Form.Control type="text" name="nome" placeholder="Insira um nome que represente o ranking que irá criar" />
                    </Form.Group>

                    <Form.Group className="mb-12" controlId="formA">
                        <Form.Label>Impactos da função fim da UFPE</Form.Label>
                        <Form.Control type="text" name="a" placeholder="A" />
                    </Form.Group>

                    <Form.Group className="mb-12" controlId="formA">
                        <Form.Label>Impactos da função fim da UFPE</Form.Label>
                        <Form.Control type="text" name="b" placeholder="B" />
                    </Form.Group>

                    <Form.Group className="mb-12" controlId="formA">
                        <Form.Label>Impactos da função fim da UFPE</Form.Label>
                        <Form.Control type="text" name="c" placeholder="C" />
                    </Form.Group>

                    <Form.Group className="mb-12" controlId="formA">
                        <Form.Label>Impactos da função fim da UFPE</Form.Label>
                        <Form.Control type="text" name="d" placeholder="D" />
                    </Form.Group>

                    <Form.Group className="mb-12" controlId="formA">
                        <Form.Label>Impactos da função fim da UFPE</Form.Label>
                        <Form.Control type="text" name="e" placeholder="E" />
                    </Form.Group>

                    <Form.Group className="mb-12" controlId="formA">
                        <Form.Label>Impactos da função fim da UFPE</Form.Label>
                        <Form.Control type="text" name="f" placeholder="F" />
                    </Form.Group>

                    <Form.Group className="mb-12" controlId="formA">
                        <Form.Label>Impactos da função fim da UFPE</Form.Label>
                        <Form.Control type="text" name="g" placeholder="G" />
                    </Form.Group>

                    <Form.Group className="mb-12" controlId="formA">
                        <Form.Label>Impactos da função fim da UFPE</Form.Label>
                        <Form.Control type="text" name="h" placeholder="H" />
                    </Form.Group>

                    <ButtonGroup size="lg" className="mb-4">
                        <Button variant="danger" className="">
                                Registrar
                        </Button>
                    </ButtonGroup>
                </Form>
            </div>
        </div>
    )
}

export default NewRanking