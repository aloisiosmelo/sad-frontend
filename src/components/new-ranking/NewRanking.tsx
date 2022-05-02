import { FC, useContext, useState } from "react";
import { Form, Button, ButtonGroup } from "react-bootstrap";
import * as XLSX from "xlsx";
import { AppContext } from "../../App";
import "moment/locale/pt-br";
import moment from "moment";
import { useFormik, Formik, Field, Form as FormikForm } from "formik";
import NumberFormat from "react-number-format";
import * as Yup from "yup";
import { NutFill } from "react-bootstrap-icons";
import ValidationMessage from "../validation-message";
moment().locale("pt-br");

const SignupSchema = Yup.object().shape({
  rankingName: Yup.string()

    .min(5, "Título muito curto!")

    .max(20, "Título muito longo!")

    .required("Um título é necessário"),
});

const RemoveFormat = (value) => {
  return parseInt(
    value
      .split("")
      .filter((char) => char >= "0" && char <= "9")
      .join("")
  );
};

const NewRanking: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
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
      {/* <h1 className="fs-4 font-weight-normal">Novo Ranking</h1> */}
      <div className="d-flex align-items-start flex-wrap gap-5">
        <Formik
          initialValues={{
            rankingName: "",
          }}
          onSubmit={(data, action) => {
            const send = new Promise((resolve, reject) => {
              setIsLoading(true);
              setTimeout(() => {
                createRanking(data.rankingName);
                resolve(null);
              }, 1000);
            });

            send.then(() => {
              action.resetForm();
              setIsLoading(false);
            });
          }}
          validationSchema={SignupSchema}
        >
          {({ errors, touched, handleChange }) => (
            <FormikForm
              style={{
                width: "60%",
                maxWidth: "300px",
              }}
            >
              <Form.Group className="mb-12" controlId="formNome">
                <Form.Label>Título do ranking</Form.Label>
                <Field
                  name="rankingName"
                  as={Form.Control}
                  placeholder="Um título de 5 a 20 caracteres"
                />
                {errors.rankingName && touched.rankingName ? (
                  <ValidationMessage className="text-danger">
                    {errors.rankingName}
                  </ValidationMessage>
                ) : null}
              </Form.Group>
              <ButtonGroup size="lg" className="mb-4">
                <Button
                  disabled={isLoading}
                  variant="danger"
                  className="px-3"
                  type="submit"
                >
                  {isLoading ? "Registrando" : "Registrar"}
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
