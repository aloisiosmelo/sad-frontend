import { Button, Container } from "react-bootstrap";
import { FC } from "react";
import { ExclamationTriangleFill } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

const NotFound: FC = () => {
  const navigate = useNavigate();
  const returnToHome = () => {
    navigate("/dashboard");
  };
  return (
    <Container className="pt-5 gap-3 d-flex flex-column align-items-center justify-content-center text-danger">
      <ExclamationTriangleFill size={60} />
      <h2>Esta página não foi encontrada</h2>
      <Button onClick={returnToHome} variant="danger">
        Voltar ao início
      </Button>
    </Container>
  );
};

export default NotFound;
