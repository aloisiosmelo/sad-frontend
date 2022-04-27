import { FC, useContext } from "react";
import { Form, Button, ButtonGroup } from "react-bootstrap";
import * as XLSX from "xlsx";
import { AppContext } from "../../App";
import { useForm } from "react-hook-form";
import "moment/locale/pt-br";
import moment from "moment";
import validationUtilities from "../../utils/validation";
import ValidationMessage from "../validation-message";
import { useNavigate } from "react-router-dom";

moment().locale("pt-br");

const NewRanking: FC = () => {
  const handleFile = (e) => {
    const [file] = e.target.files;
    console.log(e.target.files);

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

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { dispatch } = useContext(AppContext);
  const createRanking = (rankingName) => {
    dispatch({
      type: "CREATE_RANKING",
      rankingName: rankingName.title,
      date: moment().format("LL"),
    });

    reset();
  };

  return (
    <div>
      <h1 className="fs-4 font-weight-normal">Novo Ranking</h1>
      <div className="d-flex align-items-start flex-wrap gap-5 importar-bloco mb-4">
        <Form.Group className="mb-12" controlId="formImportar">
          <Form.Label>
            Você pode importar uma planilhar ou adicionar um novo
          </Form.Label>
          <Form.Control
            type="file"
            onChange={handleFile}
            name="importar"
            placeholder="Insira uma planilha"
          />
        </Form.Group>
      </div>
      <div className="d-flex align-items-start flex-wrap gap-5">
        <Form onSubmit={handleSubmit(createRanking)}>
          <Form.Group className="mb-12" controlId="formNome">
            <Form.Label>Título do ranking</Form.Label>
            <Form.Control
              {...register("title", {
                required: {
                  value: true,
                  message: validationUtilities.isNecessary("título"),
                },
                minLength: {
                  value: 5,
                  message: validationUtilities.tooShort("título"),
                },
                maxLength: {
                  value: 25,
                  message: validationUtilities.tooLong("título"),
                },
              })}
              type="text"
              placeholder="Insira um nome que represente o ranking que irá criar"
            />
            {errors.title && (
              <ValidationMessage>{errors.title.message}</ValidationMessage>
            )}
          </Form.Group>
          <ButtonGroup size="lg" className="mb-4">
            <Button variant="danger" className="px-3" type="submit">
              Registrar
            </Button>
          </ButtonGroup>
        </Form>
      </div>
    </div>
  );
};

export default NewRanking;
