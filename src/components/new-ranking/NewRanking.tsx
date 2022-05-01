import { FC, useContext } from "react";
import { Form, Button, ButtonGroup } from "react-bootstrap";
import * as XLSX from "xlsx";
import { AppContext } from "../../App";
import "moment/locale/pt-br";
import moment from "moment";
import { useFormik, Formik, Field, Form as FormikForm } from "formik";
import NumberFormat from "react-number-format";

moment().locale("pt-br");

const RemoveFormat = (value) => {
  return parseInt(
    value
      .split("")
      .filter((char) => char >= "0" && char <= "9")
      .join("")
  );
};

// <Field
// name="rankingName"
// thousandSeparator={true}
// as={NumberFormat}
// customInput={Form.Control}
// removeFormatting={RemoveFormat}
// />

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
      console.log(data); //leitura do arquivo
    };
    reader.readAsBinaryString(file);
  };

  const { dispatch } = useContext(AppContext);
  const createRanking = (rankingName) => {
    dispatch({
      type: "CREATE_RANKING",
      rankingName: rankingName,
      date: moment().format("LL"),
    });
  };

  return (
    <div>
      <h1 className="fs-4 font-weight-normal">Novo Ranking</h1>
      <div className="d-flex align-items-start flex-wrap gap-5 importar-bloco mb-4">
        <Form.Group className="mb-12" controlId="formImportar">
          <Form.Label>
            Você pode importar uma planilhar ou adicionar um novo
          </Form.Label>
          <Form.Control type="file" onChange={handleFile} name="importar" />
        </Form.Group>
      </div>
      <div className="d-flex align-items-start flex-wrap gap-5">
        <Formik
          initialValues={{
            rankingName: "",
          }}
          onSubmit={(data) => {
            createRanking(data.rankingName);
          }}
        >
          {({ errors, touched, handleChange }) => (
            <FormikForm>
              <Form.Group className="mb-12" controlId="formNome">
                <Form.Label>Título do ranking</Form.Label>
                <Field name="rankingName" as={Form.Control} />
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

export default NewRanking;
